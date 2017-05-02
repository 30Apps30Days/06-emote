

function noop() {}

function bindEvents(thisArg, events) {
   Object.keys(events).forEach(function (selector) {
        Object.keys(events[selector]).forEach(function (event) {
            var handler = events[selector][event].bind(thisArg);
            if('document' === selector) {
                document.addEventListener(event, handler, false);
            } else if ('window' === selector) {
                window.addEventListener(event, handler, false);
            } else {
                document.querySelectorAll(selector).forEach(function (dom) {
                    dom.addEventListener(event, handler, false);
                });
            }
        });
    }); // all events bound
}

// From: https://github.com/lodash/lodash/blob/master/shuffle.js
function shuffle(array) {
  var length = array == null ? 0 : array.length;
  if (!length) { return []; }

  var index = -1;
  var lastIndex = length - 1;
  var result = array;
  while (++index < length) {
    var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    var value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result
}

function f(name, params) {
  params = Array.prototype.slice.call(arguments, 1, arguments.length);
  return name + '(' + params.join(', ') + ')';
}


var IS_CORDOVA = !!window.cordova;

var app = {
  // options
  DATA_KEY: 'com.metaist.emote.data',
  store: null,
  options: {
    sideways: true,
    upright: true,
    debug: true
  },

  // internal
  idx: 0,
  icons: [], // filtered version

  // DOM
  $chk_sideways: null,
  $chk_upright: null,

  $icon: null,
  $desc: null,
  $snackbar: null,

  init: function () {
    bindEvents(this, {
      'document': {'deviceready': this.ready},
      'form input': {'change': this.change},
      '#btn-copy': { 'click': this.copy },
      '#btn-new': { 'click': this.next }
    });

    if(!IS_CORDOVA) {
      this.options.debug && console.log('NOT cordova');
      bindEvents(this, {'window': {'load': this.ready}});
    }
    return this;
  },

  ready: function () {
    // Store DOM nodes
    this.$icon = document.querySelector('#result .icon');
    this.$desc = document.querySelector('#result .desc');
    this.$snackbar = document.querySelector('#toast');
    this.$chk_sideways = document.querySelector('#orient-sideways');
    this.$chk_upright = document.querySelector('#orient-upright');

    // Grab preferences
    this.store = plugins.appPreferences;
    this.store.fetch(this.DATA_KEY).then(function (data) {
      this.options = data || this.options;
      if(!this.options.sideways) {
        this.$chk_sideways.parentElement.MaterialCheckbox.uncheck();
      }
      if(!this.options.upright) {
        this.$chk_upright.parentElement.MaterialCheckbox.uncheck();
      }
    }.bind(this));
    return this.reset().next();
  },

  change: function () {
    this.options.sideways = this.$chk_sideways.checked;
    this.options.upright = this.$chk_upright.checked;
    this.store.store(noop, noop, this.DATA_KEY, this.options);
    return this.reset()
               .next();
  },

  reset: function () {
    this.options.debug && console.log('.reset()');
    this.idx = 0;
    this.icons = _.shuffle(_.filter(ALL_ICONS, function (icon) {
      return (icon.side && this.options.sideways) ||
             (!icon.side && this.options.upright);
    }.bind(this)));
    if(!this.icons.length) {
      this.icons = [{name: 'Unknown', icon: '?', side: false}];
    }
    return this;
  },

  next: function () {
    this.options.debug && console.log('.next()');
    this.idx++;
    if (this.idx >= this.icons.length) { this.reset(); }
    return this.render();
  },

  render: function () {
    this.$icon.innerText = this.icons[this.idx].icon;
    this.$desc.innerText = this.icons[this.idx].name;
    return this;
  },

  copy: function () {
    var data = this.icons[this.idx].icon;
    if(IS_CORDOVA) {
      cordova.plugins.clipboard.copy(data);
    }
    this.$snackbar.MaterialSnackbar.showSnackbar({message: 'Copied!'});
    return this;
  }
};

app.init();
