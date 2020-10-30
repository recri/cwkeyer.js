import { LitElement, html, css } from 'lit-element';
import { keyerLogo } from './keyer-logo.js';
import { Keyer } from './Keyer.js';

// default values
const pitchDefault = 700;
const gainDefault = -26;
const weightDefault = 50;
const ratioDefault = 50;
const compensationDefault = 0;
const riseDefault = 4;
const fallDefault = 4;
const speedDefault = 20;
const qrqDefault = false;
const inputKeyerDefault = 'iambic';
const swappedDefault = false;
const leftPaddleKeyDefault = 'AltRight';
const rightPaddleKeyDefault = 'ControlRight';
const straightKeyDefault = 'ControlRight';

// wpm speed limits
const qrqStep = 1;
const qrsStep = 1;
const qrqMax = 150;
const qrsMax = 50;
const qrqMin = 10;
const qrsMin = 10;

// application color scheme, from material design color tool
// const colorPrimary = css`#1d62a7`;
// const colorPLight = css`#5b8fd9`;
// const colorPDark  = css`#003977`;
// const colorSecondary = css`#9e9e9e`;
// const colorSLight = css`#cfcfcf`;
// const colorSDark =  css`#707070`;

export class KeyerJs extends LitElement {

  // declare LitElement properties
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      pitch: { type: Number },
      gain: { type: Number },
      speed: { type: Number },
      qrq: { type: Boolean },
      weight: { type: Number },
      ratio: { type: Number },
      compensation: { type: Number },
      rise: { type: Number },
      fall: { type: Number },
      midi: { type: String },
      swapped: { type: Boolean },
      inputKeyer: { type: String },
      leftPaddleKey: { type: String },
      rightPaddleKey: { type: String },
      straightKey: { type: String },

      running: { type: Boolean },
      text: { type: Array },
    };
  }

  // setter with updateRequest
  updateControl(control, newv) {
    // console.log(`updateControl ${control} ${newv}`);
    const oldv = this.keyer[control];
    this.keyer[control] = newv;
    localStorage.setItem(control, newv);
    this.requestUpdate(control, oldv);
  }

  // set and get properties, delegate to keyer
  set pitch(v) { this.updateControl('pitch', v); }

  get pitch() { return this.keyer.pitch; }

  set gain(v) { this.updateControl('gain', v); }
  
  get gain() { return Math.round(this.keyer.gain); }

  set speed(v) { this.updateControl('speed', v); }

  get speed() { return this.keyer.speed; }

  set weight(v) { this.updateControl('weight', v); }

  get weight() { return this.keyer.weight; }

  set ratio(v) { this.updateControl('ratio', v); }

  get ratio() { return this.keyer.ratio; }

  set compensation(v) { this.updateControl('compensation', v); }

  get compensation() { return this.keyer.compensation; }

  set rise(v) { this.updateControl('rise', v); }

  get rise() { return this.keyer.rise; }

  set fall(v) {  this.updateControl('fall', v); }

  get fall() { return this.keyer.fall; }

  set swapped(v) {  this.updateControl('swapped', v); }

  get swapped() { return this.keyer.swapped; }

  set inputKeyer(v) { this.updateControl('inputKeyer', v); }

  get inputKeyer() { return this.keyer.inputKeyer; }

  set leftPaddleKey(v) { this.updateControl('leftPaddleKey', v); }

  get leftPaddleKey() { return this.keyer.leftPaddleKey; }

  set rightPaddleKey(v) { this.updateControl('rightPaddleKey', v); }

  get rightPaddleKey() { return this.keyer.rightPaddleKey; }

  set straightKey(v) { this.updateControl('straightKey', v); }

  get straightKey() { return this.keyer.straightKey; }

  static defaultControl(control, defaultValue) {
    const saved = localStorage.getItem(control);
    return saved === null ? defaultValue : saved;
  }

  constructor() {
    super();
    // start the engine
    this.keyer = new Keyer(new AudioContext());
    // this was for debugging the need to twiddle the gain to get iambic or straight keying to work
    // this.keyer.input.straight.on('change:gain', g => console.log(`straight change:gain ${g}`), window);
    // this.keyer.input.iambic.on('change:gain', g => console.log(`iambic change:gain ${g}`), window);
    // this.keyer.output.on('change:gain', g => console.log(`output change:gain ${g}`), window);

    // default property values
    // using localStorage to persist defaults between sessions
    // defaults set at top of file
    this.pitch = KeyerJs.defaultControl('pitch', pitchDefault);
    this.gain = KeyerJs.defaultControl('gain', gainDefault);
    this.weight = KeyerJs.defaultControl('weight', weightDefault);
    this.ratio = KeyerJs.defaultControl('ratio', ratioDefault);
    this.compensation = KeyerJs.defaultControl('compensation', compensationDefault);
    this.rise = KeyerJs.defaultControl('rise', riseDefault);
    this.fall = KeyerJs.defaultControl('fall', fallDefault);
    this.speed = KeyerJs.defaultControl('speed', speedDefault);
    this.qrq = KeyerJs.defaultControl('qrq', qrqDefault);
    this.swapped = KeyerJs.defaultControl('swapped', swappedDefault);
    this.inputKeyer = KeyerJs.defaultControl('inputKeyer', inputKeyerDefault);
    this.leftPaddleKey = KeyerJs.defaultControl('leftPaddleKey', leftPaddleKeyDefault);
    this.rightPaddleKey = KeyerJs.defaultControl('rightPaddleKey', rightPaddleKeyDefault);
    this.straightKey = KeyerJs.defaultControl('straightKey', straightKeyDefault);

    this.running = this.keyer.context.state !== 'suspended';
    this.text = [['sent', ''], ['pending', '']];

    // this.keyer.outputDecoderOnLetter((ltr, code) => console.log(`output '${ltr}' '${code}'`));
    // this.keyer.inputDecoderOnLetter((ltr, code) => console.log(`input '${ltr}' '${code}'`));
    // this.keyer.output.on('sent', ltr => console.log(`sent '${ltr}'`));
  }

  static isshift(key) {
    return key === 'Control' || key === 'Alt' || key === 'Shift';
  }

  // e.key -> Control | Alt | Shift
  // e.location -> 1 for Left, 2 for Right
  // e.code -> (Control | Alt | Shift) (Left | Right)
  keydown(e) {
    if (KeyerJs.isshift(e.key)) {
      // console.log(`keydown e.key ${e.key} e.location ${e.location} e.code ${e.code}`);
      this.keyer.keydown(e);
    }
  }

  keyup(e) {
    if (KeyerJs.isshift(e.key)) this.keyer.keyup(e);
  }

  keypress(e) {
    // console.log(`keypress e.key ${e.key}`);
    this.text = this.text.concat([['pending', e.key]]);
    this.keyer.keypress(e);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["divBeforeInput","divChange"] }] */
  divBeforeInput(e) {
    switch (e.inputType) {
    case 'insertText': break;
    case 'deleteContentBackward': break;
    case 'insertFromPaste': break;
    case 'insertParagraph': break;
    default:
      console.log('divBeforeInput:');
      console.log(e);
      break;
    }
  }

  divInput(e) {
    switch (e.inputType) {
    case 'insertText':
      this.keyer.outputSend(e.data); break; // e.data inserted
    case 'insertParagraph':
      break;
    case 'deleteContentBackward':
      this.keyer.outputUnsend(e.data); break; // e.data deleted
    case 'deleteByCut':
      this.keyer.outputUnsend(e.data); break; // e.data is null
    case 'insertFromPaste':
      break; // e.data is null
    case 'insertFromDrop':
      break; // e.data is null
    default:
      console.log('divInput:');
      console.log(e);
      break;
    }
  }

  divChange(e) {
    console.log("divChange:");
    console.log(e);
  }

  playPause() {
    // console.log("play/pause clicked");
    if (this.keyer.context.state === 'suspended') {
      this.keyer.context.resume();
      this.running = true;
      // this cures need to twiddle the gain to get iambic keying to work
      // I wish I understood why
      this.gain += 1;
      this.gain -= 1;
    } else {
      this.keyer.context.suspend();
      this.running = false;
    }
  }

  clear() { this.text = [['sent',''],['pending','']]; }

  cancel() { 
    this.keyer.outputCancel();
    // clear pending queue
  }

  toggleQrq() {
    this.qrq = ! this.qrq
    if (this.qrq) {
      this.speed = Math.max(qrqMin, qrqStep * Math.floor(this.speed/qrqStep));
    } else {
      this.speed = Math.min(this.speed, qrsMax);
    }
  }

  selectInputKeyer(e) { this.inputKeyer = e.target.value; }
  
  toggleSwapped(e) { 
    console.log(`toggleSwapped e.target.value ${e.target.value} swapped ${this.swapped}`);
    this.swapped = ! this.swapped;
  }

  selectLeftPaddleKey(e) { this.leftPaddleKey = e.target.value; }

  selectRigthtPaddleKey(e) { this.rightPaddleKey = e.target.value; }

  selectStraightKey(e) { this.straightKey = e.target.value; }

  // styles
  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: black;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
	margin-left: 5%;
	max-width: 90%;
        margin-top: 16px;
      }

      button > span {
	font-size: calc(10px + 2vmin);
      }
      select {
	font-size: calc(10px + 2vmin);
      }
      div.keyboard {
        display: block;
	margin-top: 16px;
	margin-left: 10%
        width: 90%;
        height: 300px;
        overflow-y: auto;
	border: inset;
	border-color: #9e9e9e;
	border-width: 5px;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  render() {
    return html`
      <main>
        <div class="logo">${keyerLogo}</div>
	<div>
	<h1>keyer.js</h1>
        <button role="switch" aria-checked=${this.running} @click=${this.playPause}>
	  <span>${this.running ? 'Pause' : 'Play'}</span>
        </button>
        <button @click=${this.clear}>
	  <span>Clear</span>
        </button>
        <button @click=${this.cancel}>
	  <span>Cancel</span>
        </button>
	<div>
	<div class="keyboard" contenteditable="true" @input=${this.divInput} @beforeinput=${this.divBeforeInput} @keydown=${this.keydown} @keyup=${this.keyup}>
	  ${this.text.map(t => t[0] !== 'pending' ? html`<span class="${t[0]}" contenteditable="false">${t[1]}</span>` : html`${t[1]}`)}
	</div>
	<h2>Settings</h2>
	<div>
	  <input type="range" id="speed" name="speed" min=${this.qrq ? qrqMin : qrsMin} max=${this.qrq ? qrqMax : qrsMax}
		.value=${this.speed} step=${this.qrq ? qrqStep : qrsStep}
		@input=${function(e) { this.speed = e.target.value; }}>
	  <label for="speed">Speed ${this.speed} (WPM)</label>
	  <button role="switch" aria-checked=${this.qrq} @click=${this.toggleQrq}>
	    <span>${this.qrq ? 'QRQ' : 'QRS'}</span>
	  </button>
	</div>
	<div>
	  <input type="range" id="gain" name="gain" min="-50" max="10" 
		.value=${this.gain} step="1"
		@input=${function(e) { this.gain = e.target.value; }}>
	  <label for="gain">Gain ${this.gain} (dB)</label>
	</div>
	<div>
	  <input type="range" id="pitch" name="pitch" min="250" max="2000"
		.value=${this.pitch} step="1"
		@input=${function(e) { this.pitch = e.target.value; }}>
	  <label for="pitch">Pitch ${this.pitch} (Hz)</label>
	</div>
	<div>
	  <input type="range" id="weight" name="weight" min="25" max="75"
		.value=${this.weight} step="0.1"
		@input=${function(e) { this.weight = e.target.value; }}>
	  <label for="weight">Weight ${this.weight} (%)</label>
	</div>
	<div>
	  <input type="range" id="ratio" name="ratio" min="25" max="75"
		.value=${this.ratio} step="0.1"
		@input=${function(e) { this.ratio = e.target.value; }}>
	  <label for="ratio">Ratio ${this.ratio} (%)</label>
	</div>
	<div>
	  <input type="range" id="compensation" name="compensation" min="-15" max="15"
		.value=${this.compensation} step="0.1"
		@input=${function(e) { this.compensation = e.target.value; }}>
	  <label for="compensation">Compensation ${this.compensation} (%)</label>
	</div>
	<div>
	  <input type="range" id="rise" name="rise" min="1" max="10" 
		.value=${this.rise} step="0.1"
		@input=${function(e) { this.rise = e.target.value; }}>
	  <label for="rise">Rise ${this.rise} (ms)</label>
	</div>
	<div>
	  <input type="range" id="fall" name="fall" min="1" max="10"
		.value=${this.fall} step="0.1"
		@input=${function(e) { this.fall = e.target.value; }}>
	  <label for="fall">Fall ${this.fall} (ms)</label>
	</div>
	<div>
	  <label>Input keyer:
	    <select .value=${this.inputKeyer} @change=${this.selectInputKeyer}>
	      <option>none</option>
	      <option>straight</option>
	      <option>iambic</option>
	    </select>
	  </label>
	</div>
	${this.inputKeyer === 'iambic' ? html`
	<div>
	  <label>Swap paddles: 
	    <button role="switch" aria-checked=${this.swapped} @click=${this.toggleSwapped}>
	      <span>${this.swapped ? 'Swapped' : 'Not swapped'}</span>
	    </button>
	</div>
	<div>
	  <label>Left paddle key:
	    <select .value=${this.leftPaddleKey} @change=${this.selectLeftPaddleKey}>
	      <option>none</option>
	      <option>ShiftLeft</option>
	      <option>ControlLeft</option>
	      <option>AltLeft</option>
	      <option>AltRight</option>
	      <option>ControlRight</option>
	      <option>ShiftRight</option>
	    </select>
	  </label>
	</div>
	<div>
	  <label>Right paddle key:
	    <select .value=${this.rightPaddleKey} @change=${this.selectRightPaddleKey}>
	      <option>none</option>
	      <option>ShiftLeft</option>
	      <option>ControlLeft</option>
	      <option>AltLeft</option>
	      <option>AltRight</option>
	      <option>ControlRight</option>
	      <option>ShiftRight</option>
	    </select>
	  </label>
	</div>` : html``}
	${this.inputKeyer === 'straight' ? html`
	<div>
	  <label>Straight key:
	    <select .value=${this.straightKey} @change=${this.selectStraightKey}>
	      <option>none</option>
	      <option>ShiftLeft</option>
	      <option>ControlLeft</option>
	      <option>AltLeft</option>
	      <option>AltRight</option>
	      <option>ControlRight</option>
	      <option>ShiftRight</option>
	    </select>
	  </label>
	</div>` : html``}
	<h2>Status</h2>
	Sample rate: ${this.keyer.context.sampleRate};<br/>
	Current time: ${this.keyer.context.currentTime};<br/>
	Base latency: ${this.keyer.context.baseLatency};<br/>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer"
          href="https://github.com/open-wc" >open-wc</a>.
      </p>
    `;
  }
}
// Local Variables:
// mode: JavaScript
// js-indent-level: 2
// End: