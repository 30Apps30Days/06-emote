var icons = [
  {icon: ':-)', name: 'smile', char: 'latin', side: true, nose: true},
  {icon: ':)',  name: 'smile', char: 'latin', side: true, nose: false},
  {icon: ':-]', name: 'smile', char: 'latin', side: true, nose: true},
  {icon: ':]',  name: 'smile', char: 'latin', side: true, nose: false},
  {icon: ':-3', name: 'smile', char: 'latin', side: true, nose: true},
  {icon: ':3',  name: 'smile', char: 'latin', side: true, nose: false},
  {icon: ':->', name: 'smile', char: 'latin', side: true, nose: true},
  {icon: ':>',  name: 'smile', char: 'latin', side: true, nose: false},
  {icon: '=]',  name: 'smile', char: 'latin', side: true, nose: false},
  {icon: '=)',  name: 'smile', char: 'latin', side: true, nose: false},

  {icon: ':-(', name: 'frown', char: 'latin', side: true, nose: true},
  {icon: ':(',  name: 'frown', char: 'latin', side: true, nose: false},
  {icon: ':-[', name: 'frown', char: 'latin', side: true, nose: true},
  {icon: ':[',  name: 'frown', char: 'latin', side: true, nose: false},
  {icon: ':-<', name: 'frown', char: 'latin', side: true, nose: true},
  {icon: ':<',  name: 'frown', char: 'latin', side: true, nose: false},
  {icon: '=[',  name: 'frown', char: 'latin', side: true, nose: false},
  {icon: '=(',  name: 'frown', char: 'latin', side: true, nose: false},

  {icon: ':p',  name: 'tounge', char: 'latin', side: true, nose: false},
  {icon: ':P',  name: 'tounge', char: 'latin', side: true, nose: false},
  {icon: '=P',  name: 'tounge', char: 'latin', side: true, nose: false},
  {icon: ':-p', name: 'tounge', char: 'latin', side: true, nose: true},
  {icon: ':-P', name: 'tounge', char: 'latin', side: true, nose: true},

  {icon: ':D',  name: 'grin', char: 'latin', side: true, nose: false},
  {icon: '=D',  name: 'grin', char: 'latin', side: true, nose: false},
  {icon: ':-D', name: 'grin', char: 'latin', side: true, nose: true},

  {icon: ':o',  name: 'gasp', char: 'latin', side: true,  nose: false},
  {icon: ':O',  name: 'gasp', char: 'latin', side: true,  nose: false},
  {icon: ':-o', name: 'gasp', char: 'latin', side: true,  nose: true},
  {icon: ':-O', name: 'gasp', char: 'latin', side: true,  nose: true},

  {icon: ';)',  name: 'wink', char: 'latin', side: true,  nose: false},
  {icon: ';-)', name: 'wink', char: 'latin', side: true,  nose: true},
];

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

var emoticons = [{
  desc: 'smiley or happy face',
  icon: [
    ':‑)',
    ':)',
    ':-]',
    ':]',
    ':-3',
    ':3',
    ':->',
    ':>',
    '8-)',
    '8)',
    ':-}',
    ':}',
    ':o)',
    ':c)',
    ':^)',
    '=]',
    '=)',
    '☺',
    '️',
    '🙂',
    '😊',
    '😀',
    '😁'
  ]
}, {
  desc: 'laughing, big grin, laugh with glasses',
  icon: [
    ':‑D',
    ':D',
    '8‑D',
    '8D',
    'x‑D',
    'xD',
    'X‑D',
    'XD',
    '=D',
    '=3',
    'B^D',
    '😃',
    '😄',
    '😆',
    '😍'
  ]
}, {
  desc: 'very happy or double chin',
  icon: [':-))']
}, {
  desc: 'frown, sad, angry, pouting',
  icon: [
    ':‑(',
    ':(',
    ':‑c',
    ':c',
    ':‑<',
    ':<',
    ':‑[',
    ':[',
    ':-||',
    '>:[',
    ':{',
    ':@',
    '>:(',
    '☹',
    '️',
    '🙁',
    '😠',
    '😡',
    '😞',
    '😟',
    '😣',
    '😖'
  ]
}, {
  desc: 'crying',
  icon: [
    ":'‑(",
    ":'(",
    "😢",
    "😭"
  ]
}, {
  desc: 'tears of happiness, joy',
  icon: [
    ":'‑)",
    ":')",
    "😂"
  ]
}, {
  desc: 'horror, disgust, sadness, great dismay',
  icon: [
  "D‑':",
  "D:<",
  "D:",
  "D8",
  "D;",
  "D=",
  "DX",
  "😨",
  "😧",
  "😦",
  "😱",
  "😫",
  "😩"
  ]
}];


var app = {
  // options
  prefs: null,
  options: {
    'orient-sideways': true,
    'orient-upright': true,
    'chars-latin': true,
    'chars-emoji': true,
    'nose-absent': true,
    'nose-present': true
  },

  data: null,
  $icon: null,
  $desc: null,
  $snackbar: null,

  init: function () {
    bindEvents(this, {
      'document': {'deviceready': this.ready},
      'form input': {'change': this.change},
      '#btn-copy': { 'click': this.copy },
      '#btn-new': { 'click': this.renew }
    });
    return this;
  },

  ready: function () {
    // Store DOM nodes
    this.$icon = document.querySelector('#result .icon');
    this.$desc = document.querySelector('#result .desc');
    this.$snackbar = document.querySelector('#toast');

    // Grab preferences
    // this.prefs = plugins.appPreferences;
    this.renew();
    return this.render();
  },

  copy: function () {
    cordova.plugins.clipboard.copy(this.password);
    this.$snackbar.MaterialSnackbar.showSnackbar({message: 'Copied!'});
    return this;
  },

  renew: function () {
    icons = _.shuffle(icons);

    this.data = _.find(icons, function (icon) {
      var result = true;
      var orient = icon.side ? 'sideways' : 'upright';
      var nose = icon.nose ? 'present' : 'absent';

      result = result && this.options['chars-' + icon.char];
      result = result && this.options['orient-' + orient];
      result = result && this.options['nose-' + nose];
      return result;
    }.bind(this));

    return this.render();
  },

  change: function () {
    return this.render();
  },

  render: function () {
    if(!this.data) {return this; }
    this.$icon.innerText = this.data.icon;
    this.$desc.innerText = this.data.name;
    return this;
  }
};

app.init();
