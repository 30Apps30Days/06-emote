var ALL_ICONS = [
  {name: "crying, happiness", side: true, icon: ":')"},
  {name: "crying, happiness", side: true, icon: ":'-)"},
  {name: 'angry', side: true, icon: ':@'},
  {name: 'angry', side: true, icon: '>:('},
  {name: 'baby', side: false, icon: "(';')"},
  {name: 'cheer',  side: false, icon: '\\o/'},
  {name: 'confused', side: false, icon: '((+_+))'},
  {name: 'confused', side: false, icon: '(+o+)'},
  {name: 'confused', side: false, icon: '(°-°)'},
  {name: 'confused', side: false, icon: '(°.°)'},
  {name: 'confused', side: false, icon: '(°_°)'},
  {name: 'confused', side: false, icon: '(°_°>)'},
  {name: 'confused', side: false, icon: '(°°)'},
  {name: 'confused', side: false, icon: '(°レ°)'},
  {name: 'crying', side: true, icon: ":'("},
  {name: 'crying', side: true, icon: ":'-("},
  {name: 'frown', side: true, icon: ':('},
  {name: 'frown', side: true, icon: ':('},
  {name: 'frown', side: true, icon: ':-('},
  {name: 'frown', side: true, icon: ':-<'},
  {name: 'frown', side: true, icon: ':-['},
  {name: 'frown', side: true, icon: ':-||'},
  {name: 'frown', side: true, icon: ':<'},
  {name: 'frown', side: true, icon: ':<'},
  {name: 'frown', side: true, icon: ':['},
  {name: 'frown', side: true, icon: ':['},
  {name: 'frown', side: true, icon: ':c'},
  {name: 'frown', side: true, icon: ':{'},
  {name: 'frown', side: true, icon: ':-('},
  {name: 'frown', side: true, icon: ':-<'},
  {name: 'frown', side: true, icon: ':-['},
  {name: 'frown', side: true, icon: ':-c'},
  {name: 'frown', side: true, icon: '=('},
  {name: 'frown', side: true, icon: '=['},
  {name: 'frown', side: true, icon: '>:['},
  {name: 'gasp',  side: true, icon: ':-o'},
  {name: 'gasp',  side: true, icon: ':-O'},
  {name: 'gasp',  side: true, icon: ':o'},
  {name: 'gasp',  side: true, icon: ':O'},
  {name: 'grin',  side: true, icon: '8D'},
  {name: 'grin',  side: true, icon: '8-D'},
  {name: 'grin',  side: true, icon: ':-D'},
  {name: 'grin',  side: true, icon: ':D'},
  {name: 'grin',  side: true, icon: ':D'},
  {name: 'grin',  side: true, icon: ':-D'},
  {name: 'grin',  side: true, icon: '=3'},
  {name: 'grin',  side: true, icon: '=D'},
  {name: 'grin',  side: true, icon: '=D'},
  {name: 'grin',  side: true, icon: 'B^D'},
  {name: 'grin',  side: true, icon: 'xD'},
  {name: 'grin',  side: true, icon: 'XD'},
  {name: 'grin',  side: true, icon: 'x-D'},
  {name: 'grin',  side: true, icon: 'X-D'},
  {name: 'high five', side: false, icon: '>_>^ ^<_<',},
  {name: 'high five', side: false, icon: '^5',    },
  {name: 'high five', side: false, icon: 'o/\\o'},
  {name: 'horror',  side: false, icon: 'v.v'},
  {name: 'joy', side: false, icon: '\\ ^_^ /'},
  {name: 'joyful', side: false, icon: '(/◕ヮ◕)/'},
  {name: 'joyful', side: false, icon: '(^^)/'},
  {name: 'joyful', side: false, icon: '(^_^)/'},
  {name: 'joyful', side: false, icon: '(^o^)丿'},
  {name: 'joyful', side: false, icon: '(^O^)／'},
  {name: 'joyful', side: false, icon: '(^o^)／'},
  {name: 'joyful', side: false, icon: '(°o°)'},
  {name: 'joyful', side: false, icon: '(·ω·)'},
  {name: 'joyful', side: false, icon: '(≧∇≦)/'},
  {name: 'joyful', side: false, icon: '^_^'},
  {name: 'joyful', side: false, icon: '^ω^'},
  {name: 'joyful', side: false, icon: '∩(·ω·)∩'},
  {name: 'kiss',  side: true, icon: ':*'},
  {name: 'kiss',  side: true, icon: ':-*'},
  {name: 'kiss',  side: true, icon: ':×'},
  {name: 'nervous', side: false, icon: '(#^.^#)'},
  {name: 'nervous', side: false, icon: '(-_-;)'},
  {name: 'nervous', side: false, icon: '(^^;)'},
  {name: 'nervous', side: false, icon: '(^^ゞ'},
  {name: 'nervous', side: false, icon: '(^_^;)'},
  {name: 'nervous', side: false, icon: '(~_~;)'},
  {name: 'nervous', side: false, icon: '(・.・;)'},
  {name: 'nervous', side: false, icon: '(・_・;)'},
  {name: 'nervous', side: false, icon: '(・・;) ^^;'},
  {name: 'nervous', side: false, icon: '^_^;'},
  {name: 'shrug', side: false, icon: '¯\_(ツ)_/¯'},
  {name: 'shrug', side: false, icon: 'ヽ(´ー｀)┌'},
  {name: 'skeptical', side: false, icon: '>.<'},
  {name: 'sleeping', side: false, icon: '(-_-)zzz'},
  {name: 'smile', side: true, icon: ':)'},
  {name: 'smile', side: true, icon: ':-)'},
  {name: 'smile', side: true, icon: ':-3'},
  {name: 'smile', side: true, icon: ':->'},
  {name: 'smile', side: true, icon: ':-]'},
  {name: 'smile', side: true, icon: ':3'},
  {name: 'smile', side: true, icon: ':>'},
  {name: 'smile', side: true, icon: ':]'},
  {name: 'smile', side: true, icon: '=)'},
  {name: 'smile', side: true, icon: '=]'},
  {name: 'surprised', side: false, icon: 'O-O'},
  {name: 'surprised', side: false, icon: 'O_O'},
  {name: 'surprised', side: false, icon: 'O_o'},
  {name: 'surprised', side: false, icon: 'o_O'},
  {name: 'surprised', side: false, icon: 'o_o'},
  {name: 'surprised', side: false, icon: 'o-o'},
  {name: 'tongue', side: true, icon: ':-p'},
  {name: 'tongue', side: true, icon: ':-P'},
  {name: 'tongue', side: true, icon: ':b'},
  {name: 'tongue', side: true, icon: ':p'},
  {name: 'tongue', side: true, icon: ':P'},
  {name: 'tongue', side: true, icon: ':P'},
  {name: 'tongue', side: true, icon: ':p'},
  {name: 'tongue', side: true, icon: ':Þ'},
  {name: 'tongue', side: true, icon: ':þ'},
  {name: 'tongue', side: true, icon: ':-b'},
  {name: 'tongue', side: true, icon: ':-P'},
  {name: 'tongue', side: true, icon: ':-p'},
  {name: 'tongue', side: true, icon: ':-Þ'},
  {name: 'tongue', side: true, icon: ':-þ'},
  {name: 'tongue', side: true, icon: '=P'},
  {name: 'tongue', side: true, icon: '=p'},
  {name: 'tongue', side: true, icon: '>:P'},
  {name: 'tongue', side: true, icon: 'd:'},
  {name: 'tongue', side: true, icon: 'XP'},
  {name: 'tongue', side: true, icon: 'xp'},
  {name: 'tongue', side: true, icon: 'X-P'},
  {name: 'tongue', side: true, icon: 'x-p'},
  {name: 'troubled', side: false, icon: '(>_<)'},
  {name: 'troubled', side: false, icon: '(>_<)>'},
  {name: 'wink',  side: true, icon: '*)'},
  {name: 'wink',  side: true, icon: '*-)'},
  {name: 'wink',  side: true, icon: ':-,'},
  {name: 'wink',  side: true, icon: ';)'},
  {name: 'wink',  side: true, icon: ';-)'},
  {name: 'wink',  side: true, icon: ';]'},
  {name: 'wink',  side: true, icon: ';^)'},
  {name: 'wink',  side: true, icon: ';D'},
  {name: 'wink',  side: true, icon: ';-)'},
  {name: 'wink',  side: true, icon: ';-]'},
  {name: 'wink', side: false, icon: '(^_-)'},
  {name: 'wink', side: false, icon: '(^_-)-☆'},

  // Objects
  {name: 'cat', side: false, icon: "(='.'=)"},
  {name: 'cat', side: false, icon: '=^-.-^='},
  {name: 'cat', side: false, icon: '>^..^<'},
  {name: 'cat', side: false, icon: '^..^'},
  {name: 'face', side: false, icon: '©¿©'},
  {name: 'face', side: false, icon: 'ö¿ö'},
  {name: 'fish', side: false, icon: '<*)))-{'},
  {name: 'fish', side: false, icon: '><((((o>'},
  {name: 'fish', side: false, icon: '><(((*>'},
  {name: 'fish', side: false, icon: '><>'},
  {name: 'heart', side: true, icon: '<3'},
  {name: 'heart, broken', side: true, icon: '</3'},
  {name: 'heart, broken', side: true, icon: '<\\3'},
  {name: 'mouse', side: true, icon: '<:3)~~~~'},
  {name: 'mug, beer', side: false, icon: '(_)3'},
  {name: 'mug, coffee', side: false, icon: '(_)>'},
  {name: 'rose', side: true, icon: "@}-;-'---"},
  {name: 'rose', side: true, icon: '@>-->--'},
  {name: 'rose', side: true, icon: '@}->--'},
  {name: 'rose', side: true, icon: '@};-'},
  {name: 'shark', side: true, icon: '____/\\___\\o/___'},

  // People
  {name: 'Abraham Lincoln', side: true, icon: '=):-)='},
  {name: 'Abraham Lincoln', side: true, icon: '==):-)='},
  {name: 'Elvis Presley', side: true, icon: '5:-)'},
  {name: 'Elvis Presley', side: true, icon: '~:-\\'},
  {name: 'Homer Simpson', side: true, icon: '~(_8^(I)'},
  {name: 'John Lennon', side: false, icon: '//o-o\\\\'},
  {name: 'Marge Simpson', side: true, icon: '****:-)'},
  {name: 'Santa Claus', side: true, icon: '*<:-)'},
  {name: 'Santa Claus', side: true, icon: '*<:-)>'},
  {name: 'Santa Claus', side: true, icon: '*<|:-)'},
];



/*

*/



/*

a cold           :-~)
a cold           :-~|
a cold           :~)
angel           O :-)
angel           O:-)
angry, black eye           ;-(
annoyed           >:-(
aside comment           :-Y
astonished           :C
Atomic bomb           @==
Batman           B-]
big grin           =^D
big mouth           :( )
black eye           ?(
black eye           ?-(
blowing kiss           :-{}
brain dead           %-)
Cat in the Hat           IIIIII8^)X
chef           C=:-)
Cindy Crawford           :-.)
confused           :~/
Count Dracula           :-[x>
cowboy           C):-)
cowboy           C):-)
cry           ;(
crying           :.(
crying           :\'
crying           :\'(
crying           :\'-(
crying           :~-(
crying           ;(
Darth Vader           (8<|
deja vu           :-| :-|
diamond ring           [>O
disappointed           :e
dozen roses           12x--<--@
Eeek!           <:-O
female           O+
graduate           Q:-)
happy, approving           :^D
hard time           :{
hard time           :{
Hats off to you!           d :-o
hear no evil           :X
Hee hee!           |-)
indifferent           :-|
just died           X-(
kiss           :x
kiss, big lips           :{}
kisses           =^*
laughing happily           :-D
lips are sealed / kiss           :-X
lips are sealed / kiss           :-x
lips sealed           = X
male           O->
mean pet           3:[
mischievous smile           :-}
mohawk           -:(
no smoking           :/i
not funny           :/)
nuclear war           @=
Omigod!!           8-O
pet           3:]
piggy           :©)
punk           =:-)
rose           --<--@
rose           @>--->---
rose           @>--->----
rose           @}->--
rose           @}->--
salute           M:-)
scared           :+(
secret agent           (B^|
see no evil           M-)
seriously angry           :-||
shedding a tear           :`-(
shouting           :-V
skateboarder           o{-<]:
smile           :-)
smile, moustache           :-{)
smile, moustache & beard           :-{)}
smile, sunglasses           B*)
smiling blockhead / sarcasm           :-]
smoking           :-p~
smoking           :-Q
smoking           :-Q~
snake           =====:}
sniffles           :-\'|
snore           |^o
snowboarder           O>-</
starry-eyed angel           O8-)
sticking out tongue           :-P
sticking out tongue           :-p
sticking out tongue           :P
sticking out tongue           :P
sticking out tongue, nose           :^P
sticking out tongue, sunglasses           B^P
sticking tongue out           :-r
sunglasses on head           B:-)
surprised           = O
sword           <;;;;;;;;;;;|===0
tears of happiness           :\'-)
Uh oh!           :-o
Unsmiley           :-t
unsmiling blockhead / criticism           :-[
vampire           :-[
very angry           :-||
What?           :>
What?           :@
What?!           :-s
wink           ; )
wink           ;-)
wink, devilsh           >;->
wink, stick out tongue           ; P
winkey           ;-)
winking & laughing           ;-D




[:-) Wearing a Walkman
[:-] Square head
[:-| Frankenstein
[:] Robot
[:| Frankenstein
[:|] Robot
[[ ]] Hug Insert a name in the brackets of the one who is being hugged, as: [[Marcia]]
[] Hug
\') Winky
\'-) Winky
\_/ Empty glass
\~/ Full glass
]:-> Devil
]:-) Happy devil
][ Back to back
^ ^ ^ Giggles

Next: Page 5 of Emoticons and Smileys

Related article: Internet Shorthand

:p~~ I'm drooling
:-O Open-mouthed, surprised
:-o Surprised look, or yawn
%') Finished off a fifth for lunch
%) Cross-eyed; Artistic face; Picasso
%*@:-( Hung Over

%*} Very drunk %+\ Messed up; Spaced out; Effected; Scrambled; Out-to-lunch
%+{ Lost a fight
%+| Beaten up
%- Drunk with laughter
%-( Glasses broken; Sad confused; Practical joker who got beat up
%-() Monkey face
%-(I) Laughing out loud
%-(|) Laughing out loud
%-) Stared too long at monitor; Confused; Cross-eyed;
%-/ Brain dead; Hung over
%-6 Brain dead
%-<I> Drunk with laughter
%-<|> Drunk with laughter
%-\ Hung over
%-^) Pablo Picasso
%-{ Sad; Not amused
%-| Been working all night
%-} Amused
%-~ Pablo Picasso
^5 High five
`:-) Raised eyebrow
{{ }} Hug; the one whose name is in the brackets is being hugged; Example: {{MJ}}
{} No comment
|( Sleepy (on late night email message)
|-<> Puckered up for a kiss
|-( Sleepy, struggling to stay awake, or sleeping badly
|-D Big laugh
|-O Yawn
|-{ Good grief!


|-| Asleep
|I Asleep
|^o Snoring
}-) Wry smile
}: [ Angry, frustrated
}{ Face to face
~ :-( Steaming mad
~:-( Flame message
~:-\ Elvis
~:o Baby
~:\ Elvis
~= Lit candle, indicating a flame (inflammatory message)
~== Begins a flame (inflammatory message)
~~:-( Especially hot flame message
~~:[ Net flame
~~~~8} Snake
!-( Black eye
!-) Proud of black eye
#-) Wiped out, partied all night
#:-o Shocked
$-) Won the lottery, or money on the brain
%(|:-) Propeller-head
:-, Smirk
:-/ Wry face
:-6 Exhausted
:-9 Licking lips
:-? Licking lips, or tongue in cheek
:-@ Screaming
:-C Astonished
:-c Very unhappy
:-D Laughing
:-d~ Heavy smoker
:-e Disappointed
:-f Sticking out tongue
:-I Pondering, or impartial
:-i Wry smile or half-smile
:-J Tongue in cheek
:-j One-sided smile
:-k Puzzlement
:-l One-sided smile
:-M Speak no evil
%*} Inebriated
%+{ Got beat up
%-( Confused
%-) Dazed or silly
%-6 Brain-dead
%-\ Hung over
%-{ Ironic
%-| Worked all night
%-} Humorous or ironic
%\ Hangover
>>:-<< Furious
>- Female
>-> Winking devil
>-< Furious
>-) Devilish wink
>:) Little devil
>:-> Very mischievous devil
>:-< Angry
>:-< Mad
>:-( Annoyed
>:-) Mischievous devil
>=^ P Yuck
<:> Devilish expression
<:-> Devilish expression
<:-( Dunce
<:-) Innocently asking dumb question
<:-| Dunce
<:| Dunce
( 8(|) Homer
( <> .. <> ) alienated
(( )):** Hugs and kisses
((())) Lots of hugging (initials or a name can be put in the middle of the one being hugged)
() Hugging
(-: Left-handed smile, or smiley from the southern hemisphere
(:& Angry
(:- Unsmiley
(:-& Angry
(:-( Unsmiley
(:-) Smiley variation
(:-* Kiss
(:-\ Very sad
(::()::) Bandaid, meaning comfort
(:| Egghead
* Kiss
*<:-) Santa Claus
*<|:-) Santa Claus, or a clown
*-) Shot to death
+<:-) Religious leader
+<:-| Monk or nun
+<||-) Knight
+:-) Priest
+O:-) The Pope
-) Tongue in cheek
-= Snuffed candle to end a flame message
-=#:-) Wizard
/\/\/\ Laughter
0:-) Angel
12x@>--->--- A dozen roses
2B|^2B To be or not to be
5:-) Elvis
7:) Ronald Reagan
7:^) Ronald Reagan
8 Infinity
8 :-) Wizard
8) Wide-eyed, or wearing glasses
8-# Death
8-) Wide-eyed, or wearing glasses
8-o Shocked
8-O Astonished
8-P Yuck!


8-[ Frayed nerves; overwrought
8-] Wow!
8-| Wide-eyed surprise
: ( Sad
: ) Smile
: [ Bored, sad
: | Bored, sad
:( ) Loudmouth, talks all the time; or shouting
:* Kiss
:*) Clowning
:**: Returning kiss
:+( Got punched in the nose
:,( Crying
:- Male
:-# My lips are sealed; or someone wearing braces
:-& Tongue-tied
:-> Smile of happiness or sarcasm
:->< Puckered up to kiss
:-< Very sad
:-( Frown
:-) Classic smiley
:-* Kiss

*/
