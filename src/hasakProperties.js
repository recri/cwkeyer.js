// parameter map for hasak 100
// generated with .../hasak/doc/nrpn.tcl from .../hasak/config.h
// do not edit, regenerated from .../hasak/config.h by .../hasak/doc/nrpn.tcl output js
export const hasakProperties = {
    "KYRC_VERSION": {nrpn: 100, type: "def", title: "version number of the NRPN set implemented"},
    "KYR_N_VOX": {nrpn: 6, type: "def", title: "number of keyer voices"},
    "KYR_VOX_NONE": {nrpn: 0, type: "def", title: "no active voice, default parameters for other voices"},
    "KYR_VOX_TUNE": {nrpn: 1, type: "def", title: "tune switch"},
    "KYR_VOX_S_KEY": {nrpn: 2, type: "def", title: "Straight Key"},
    "KYR_VOX_PAD": {nrpn: 3, type: "def", title: "Paddle"},
    "KYR_VOX_WINK": {nrpn: 4, type: "def", title: "Winkey Key"},
    "KYR_VOX_KYR": {nrpn: 5, type: "def", title: "Kyr Key"},
    "KYR_VOX_BUT": {nrpn: 6, type: "def", title: "headset button straight key"},
    "KYR_CC_MSB": {nrpn: 6, type: "def", title: "MIDI control change Data Entry (MSB)"},
    "KYR_CC_LSB": {nrpn: 38, type: "def", title: "MIDI control change Data Entry (LSB)"},
    "KYR_CC_NRPN_LSB": {nrpn: 98, type: "def", title: "MIDI control change Non-registered Parameter (LSB)"},
    "KYR_CC_NRPN_MSB": {nrpn: 99, type: "def", title: "MIDI control change Non-registered Parameter (MSB)"},
    "KYRV_NOT_SET": {nrpn: -1, type: "val", title: "16 bit not set value"},
    "KYRV_MASK": {nrpn: 16383, type: "val", title: "14 bit mask"},
    "KYRP_FIRST": {nrpn: 0, type: "rel", title: "base of nrpns"},
    "KYRP_NOTHING": {nrpn: 0, type: "rel", title: "nothng parameter value, zero is not a valid parameter", property: "nothing"},
    "KYRP_CODEC": {nrpn: 1, type: "rel", title: "base of codec nrpns"},
    "KYRP_VOLUME": {nrpn: 1, type: "par", label: "Vol", title: "output volume", unit: "dB/4", range: "-128 24", property: "masterVolume"},
    "KYRP_INPUT_SELECT": {nrpn: 2, type: "par", label: "InSel", title: "input select", values: "KYRV_INPUT_*", property: "inputSelect"},
    "KYRV_INPUT_*": {name: "KYRV_INPUT_*", type: "opts", property: "inputSelects", opts: "KYRV_INPUT_MIC KYRV_INPUT_LINE"},
    "KYRV_INPUT_MIC": {nrpn: 0, type: "val", label: "Mic", title: "input select microphone", property: "inputSelects"},
    "KYRV_INPUT_LINE": {nrpn: 1, type: "val", label: "LineIn", title: "input select line in", property: "inputSelects"},
    "KYRP_INPUT_LEVEL": {nrpn: 3, type: "par", label: "InLvl", title: "input level", range: "-128 24", unit: "dB/4", property: "inputLevel"},
    "KYRP_SOFT": {nrpn: 4, type: "rel", title: "base of soft params"},
    "KYRP_BUTTON_0": {nrpn: 4, type: "par", label: "But0", title: "headset button 0 - none pressed", range: "-8192 8191", unit: "", property: "buttonLevel0"},
    "KYRP_BUTTON_1": {nrpn: 5, type: "par", label: "But1", title: "headset button 1 - center or only pressed", range: "-8192 8191", unit: "", property: "buttonLevel1"},
    "KYRP_BUTTON_2": {nrpn: 6, type: "par", label: "But2", title: "headset button 2 - up pressed", range: "-8192 8191", unit: "", property: "buttonLevel2"},
    "KYRP_BUTTON_3": {nrpn: 7, type: "par", label: "But3", title: "headset button 3 - down pressed", range: "-8192 8191", unit: "", property: "buttonLevel3"},
    "KYRP_BUTTON_4": {nrpn: 8, type: "par", label: "But4", title: "headset button 4 - hey pressed", range: "-8192 8191", unit: "", property: "buttonLevel4"},
    "KYRP_PTT_ENABLE": {nrpn: 9, type: "par", label: "PTTReq", title: "require EXT_PTT to transmit", range: "0 1", ignore: "1", property: "externalPTTRequire"},
    "KYRP_IQ_ENABLE": {nrpn: 10, type: "par", label: "IQ mode", title: "Mode of IQ sample generation", values: "KYRV_IQ_*", property: "iqModeSelect"},
    "KYRV_IQ_*": {name: "KYRV_IQ_*", type: "opts", property: "iqModeSelects", opts: "KYRV_IQ_NONE KYRV_IQ_LSB KYRV_IQ_USB"},
    "KYRV_IQ_NONE": {nrpn: 0, type: "val", label: "None", title: "no IQ", property: "iqModes"},
    "KYRV_IQ_LSB": {nrpn: 1, type: "val", label: "LSB", title: "IQ for lower sideband", property: "iqModes"},
    "KYRV_IQ_USB": {nrpn: 2, type: "val", label: "USB", title: "IQ for upper sideband", property: "iqModes"},
    "KYRP_IQ_ADJUST": {nrpn: 11, type: "par", label: "IQAdj", title: "adjustment to IQ phase", range: "-8192 8191", unit: "pp8191", ignore: "1", property: "iqAdjustPhase"},
    "KYRP_TX_ENABLE": {nrpn: 12, type: "par", label: "TXEn", title: "soft enable TX", range: "0 1", property: "txEnable"},
    "KYRP_ST_ENABLE": {nrpn: 13, type: "par", label: "STEn", title: "enable sidetone generation", range: "0 1", property: "sidetoneEnable"},
    "KYRP_IQ_BALANCE": {nrpn: 14, type: "par", label: "IQBal", title: "adjustment to IQ balance", range: "-8192 8191", unit: "pp8191", ignore: "1", property: "iqAdjustBalance"},
    "KYRP_ST_PAN": {nrpn: 15, type: "par", label: "STPan", title: "sidetone pan left or right", range: "-8192 8191", unit: "pp8191", ignore: "1", property: "sidetonePan"},
    "KYRP_OUT_ENABLE": {nrpn: 16, type: "par", label: "OutMix", title: "output mixer enable bits", range: "0 4095", property: "outputEnable"},
    "KYRP_COMM": {nrpn: 17, type: "rel", title: "keyer parameters shared across voices"},
    "KYRP_DEBOUNCE": {nrpn: 17, type: "par", label: "Deb", title: "debounce period", range: "0 16383", unit: "sample", property: "debouncePeriod"},
    "KYRP_VOICE": {nrpn: 18, type: "par", label: "Voice", title: "Keyer voice selected for customization", values: "KYRV_VOX_*", property: "voice"},
    "KYRV_VOX_*": {name: "KYRV_VOX_*", type: "opts", property: "voices", opts: "KYRV_VOX_NONE KYRV_VOX_TUNE KYRV_VOX_S_KEY KYRV_VOX_PAD KYRV_VOX_WINK KYRV_VOX_KYR KYRV_VOX_BUT"},
    "KYRV_VOX_NONE": {nrpn: 0, type: "val", label: "None", title: "No voice", property: "voices"},
    "KYRV_VOX_TUNE": {nrpn: 1, type: "val", label: "Tune", title: "Voice used when tuning", property: "voices"},
    "KYRV_VOX_S_KEY": {nrpn: 2, type: "val", label: "Key", title: "Straight Key", property: "voices"},
    "KYRV_VOX_PAD": {nrpn: 3, type: "val", label: "Paddle", title: "Paddle", property: "voices"},
    "KYRV_VOX_WINK": {nrpn: 4, type: "val", label: "Winkey", title: "Winkey Key", property: "voices"},
    "KYRV_VOX_KYR": {nrpn: 5, type: "val", label: "Keyer", title: "Keyer Key", property: "voices"},
    "KYRV_VOX_BUT": {nrpn: 6, type: "val", label: "Button", title: "headset button straight key", property: "voices"},
    "KYRP_PTT": {nrpn: 19, type: "rel", title: "PTT timing parameters"},
    "KYRP_HEAD_TIME": {nrpn: 19, type: "par", label: "PTTHead", title: "time ptt should lead key, key delay", range: "0 16383", unit: "sample", property: "pttHeadTime"},
    "KYRP_TAIL_TIME": {nrpn: 20, type: "par", label: "PTTTail", title: "time ptt should linger after key", range: "0 16383", unit: "sample", property: "pttTailTime"},
    "KYRP_HANG_TIME": {nrpn: 21, type: "par", label: "PTTHang", title: "time in dits ptt should linger after key", range: "0 127", unit: "dit", property: "pttHangTime"},
    "KYRP_RAMP": {nrpn: 22, type: "rel", title: "base of the keyer ramp parameters"},
    "KYRP_RISE_TIME": {nrpn: 22, type: "par", title: "key rise ramp length", range: "0 16383", unit: "sample", property: "keyerRiseTime"},
    "KYRP_FALL_TIME": {nrpn: 23, type: "par", title: "key fall ramp length", range: "0 16383", unit: "sample", property: "keyerFallTime"},
    "KYRP_RISE_RAMP": {nrpn: 24, type: "par", title: "key rise ramp", values: "KYRV_RAMP_*", default: "KYRV_RAMP_HANN", property: "keyerRiseRamp", valuesProperty: "keyerRamps"},
    "KYRV_RAMP_*": {name: "KYRV_RAMP_*", type: "opts", property: "keyerRamps", opts: "KYRV_RAMP_HANN KYRV_RAMP_BLACKMAN_HARRIS KYRV_RAMP_LINEAR"},
    "KYRP_FALL_RAMP": {nrpn: 25, type: "par", title: "key fall ramp", values: "KYRV_RAMP_*", default: "KYRV_RAMP_HANN", property: "keyerFallRamp", valuesProperty: "keyerRamps"},
    "KYRV_RAMP_HANN": {nrpn: 0, type: "val", label: "Hann", title: "ramp from Hann window function, raised cosine", property: "keyerRamps"},
    "KYRV_RAMP_BLACKMAN_HARRIS": {nrpn: 1, type: "val", label: "Blackman Harris", title: "ramp from Blackman Harris window function", property: "keyerRamps"},
    "KYRV_RAMP_LINEAR": {nrpn: 2, type: "val", label: "Linear", title: "linear ramp, for comparison", property: "keyerRamps"},
    "KYRP_PAD": {nrpn: 26, type: "rel", title: "base of paddle keyer parameters"},
    "KYRP_PAD_MODE": {nrpn: 26, type: "par", title: "iambic keyer mode A/B/S", values: "KYRV_MODE_*", default: "KYRV_MODE_A", property: "paddleMode"},
    "KYRV_MODE_*": {name: "KYRV_MODE_*", type: "opts", property: "paddleModes", opts: "KYRV_MODE_A KYRV_MODE_B KYRV_MODE_S"},
    "KYRV_MODE_A": {nrpn: 0, type: "val", label: "A", title: "paddle keyer iambic mode A"},
    "KYRV_MODE_B": {nrpn: 1, type: "val", label: "B", title: "paddle keyer iambic mode B"},
    "KYRV_MODE_S": {nrpn: 2, type: "val", label: "S", title: "paddle keyer bug mode"},
    "KYRP_PAD_SWAP": {nrpn: 27, type: "par", title: "swap paddles", range: "0 1", default: "0", property: "paddleSwapped"},
    "KYRP_PAD_ADAPT": {nrpn: 28, type: "par", title: "paddle adapter normal/ultimatic/single lever", values: "KYRV_ADAPT_*", default: "KYRV_ADAPT_NORMAL", property: "paddleAdapter"},
    "KYRV_ADAPT_*": {name: "KYRV_ADAPT_*", type: "opts", property: "paddleAdapters", opts: "KYRV_ADAPT_NORMAL KYRV_ADAPT_ULTIMATIC KYRV_ADAPT_SINGLE"},
    "KYRV_ADAPT_NORMAL": {nrpn: 0, type: "val", label: "Normal", title: "paddle keyer unmodified"},
    "KYRV_ADAPT_ULTIMATIC": {nrpn: 1, type: "val", label: "Ultimatic", title: "paddle keyer modified to produce ultimatic keyer"},
    "KYRV_ADAPT_SINGLE": {nrpn: 2, type: "val", label: "Single", title: "paddle keyer modified to simulate single lever paddle"},
    "KYRP_AUTO_ILS": {nrpn: 29, type: "par", title: "automatic letter space timing", range: "0 1", default: "1", property: "autoLetterSpace"},
    "KYRP_AUTO_IWS": {nrpn: 30, type: "par", title: "automatic word space timing", range: "0 1", default: "0", property: "autoWordSpace"},
    "KYRP_PAD_KEYER": {nrpn: 31, type: "par", title: "paddle keyer implementation", values: "KYRV_KEYER_*", default: "KYRV_KEYER_VK6PH", property: "paddleKeyer"},
    "KYRV_KEYER_*": {name: "KYRV_KEYER_*", type: "opts", property: "paddleKeyers", opts: "KYRV_KEYER_AD5DZ KYRV_KEYER_K1EL KYRV_KEYER_ND7PA KYRV_KEYER_VK6PH"},
    "KYRV_KEYER_AD5DZ": {nrpn: 0, type: "val", label: "ad5dz", title: "paddle keyer algorithm by ad5dz", property: "paddleKeyers"},
    "KYRV_KEYER_K1EL": {nrpn: 1, type: "val", label: "k1el", title: "paddle keyer algorithm by k1el", property: "paddleKeyers"},
    "KYRV_KEYER_ND7PA": {nrpn: 2, type: "val", label: "nd7pa", title: "paddle keyer algorithm by nd7pa", property: "paddleKeyers"},
    "KYRV_KEYER_VK6PH": {nrpn: 3, type: "val", label: "vk6ph", title: "paddle keyer algorithm by vk6ph", property: "paddleKeyers"},
    "KYRP_CHAN": {nrpn: 32, type: "rel", title: "base of midi channels"},
    "KYRP_CHAN_CC": {nrpn: 32, type: "par", title: "midi channel for sending controls", unit: "", range: "0 16", property: "channelCC"},
    "KYRP_CHAN_NOTE": {nrpn: 33, type: "par", title: "midi channel for sending input notes", unit: "", range: "0 16", property: "channelNote"},
    "KYRV_CHAN_INVALID": {nrpn: 0, type: "val", title: "invalid channel, used to disable midi channel"},
    "KYRP_NOTE": {nrpn: 34, type: "rel", title: "base of midi notes"},
    "KYRP_NOTE_L_PAD": {nrpn: 34, type: "par", title: "note for left paddle switch input", unit: "", range: "0 128", property: "noteLeftPaddle"},
    "KYRP_NOTE_R_PAD": {nrpn: 35, type: "par", title: "note for right paddle switch input", unit: "", range: "0 128", property: "noteRightPaddle"},
    "KYRP_NOTE_S_KEY": {nrpn: 36, type: "par", title: "note for straight key switch input", unit: "", range: "0 128", property: "noteStraightKey"},
    "KYRP_NOTE_EXT_PTT": {nrpn: 37, type: "par", title: "note for external ptt switch input", unit: "", range: "0 128", property: "noteExternalPTT"},
    "KYRP_NOTE_KEY_OUT": {nrpn: 38, type: "par", title: "note for key/ptt key output", unit: "", range: "0 128", property: "noteKeyOut"},
    "KYRP_NOTE_PTT_OUT": {nrpn: 39, type: "par", title: "note for key/ptt ptt output", unit: "", range: "0 128", property: "notePTTOut"},
    "KYRV_NOTE_INVALID": {nrpn: 128, type: "val", title: "invalid note, used to disable midi events"},
    "KYRP_PINS": {nrpn: 40, type: "rel", title: "base of hardware pin assignments"},
    "KYRP_ADC0_CONTROL": {nrpn: 40, type: "par", title: "property for adc0 = A0", unit: "", values: "KYRV_ADC_*", property: "adc0Control", valuesProperty: "adcControls"},
    "KYRV_ADC_*": {name: "KYRV_ADC_*", type: "opts", property: "adcControls", opts: "KYRV_ADC_NOTHING KYRV_ADC_VOLUME KYRV_ADC_SPEED KYRV_ADC_LEVEL KYRV_ADC_TONE"},
    "KYRP_ADC1_CONTROL": {nrpn: 41, type: "par", title: "property for adc1 = A1 (master volume on the CWKeyer)", unit: "", values: "KYRV_ADC_*", property: "adc1Control", valuesProperty: "adcControls"},
    "KYRP_ADC2_CONTROL": {nrpn: 42, type: "par", title: "property for adc2 = A2 (sidetone volume on the CWKeyer)", unit: "", values: "KYRV_ADC_*", property: "adc2Control", valuesProperty: "adcControls"},
    "KYRP_ADC3_CONTROL": {nrpn: 43, type: "par", title: "property for adc3 = A3 (sidetone frequency on the CWKeyer", unit: "", values: "KYRV_ADC_*", property: "adc4Control", valuesProperty: "adcControls"},
    "KYRP_ADC4_CONTROL": {nrpn: 44, type: "par", title: "property for adc4 = A8 (speed on the CWKeyer)", unit: "", values: "KYRV_ADC_*", property: "adc3Control", valuesProperty: "adcControls"},
    "KYRP_ADC_ENABLE": {nrpn: 45, type: "par", label: "ADCEn", title: "enable adc channels", property: "adcEnable"},
    "KYRP_MORSE": {nrpn: 46, type: "rel", title: "morse code table base"},
    "KYRP_MIXER": {nrpn: 110, type: "rel", title: "base of output mixer block"},
    "KYRP_MIX_USB_L0": {nrpn: 110, type: "par", title: "i2s_in left to usb_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_USB_L1": {nrpn: 111, type: "par", title: "sidetone left to usb_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_USB_L2": {nrpn: 112, type: "par", title: "IQ left to usb_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_USB_L3": {nrpn: 113, type: "par", title: "usb_in left to usb_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_USB_R0": {nrpn: 114, type: "par", title: "i2s_in right to usb_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_USB_R1": {nrpn: 115, type: "par", title: "sidetone right to usb_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_USB_R2": {nrpn: 116, type: "par", title: "IQ right to usb_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_USB_R3": {nrpn: 117, type: "par", title: "usb_in right to usb_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_L0": {nrpn: 118, type: "par", title: "usb_in left to i2s_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_L1": {nrpn: 119, type: "par", title: "sidetone left to i2s_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_L2": {nrpn: 120, type: "par", title: "IQ left to i2s_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_L3": {nrpn: 121, type: "par", title: "i2s_in right to i2s_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_R0": {nrpn: 122, type: "par", title: "usb_in right to i2s_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_R1": {nrpn: 123, type: "par", title: "sidetone right to i2s_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_R2": {nrpn: 124, type: "par", title: "IQ right to i2s_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_I2S_R3": {nrpn: 125, type: "par", title: "i2s_in right to i2s_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_L0": {nrpn: 126, type: "par", title: "usb_in left to hdw_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_L1": {nrpn: 127, type: "par", title: "sidetone left to hdw_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_L2": {nrpn: 128, type: "par", title: "IQ left to hdw_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_L3": {nrpn: 129, type: "par", title: "i2s_in left to hdw_out left", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_R0": {nrpn: 130, type: "par", title: "usb_in right to hdw_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_R1": {nrpn: 131, type: "par", title: "sidetone right to hdw_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_R2": {nrpn: 132, type: "par", title: "IQ right to hdw_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_MIX_HDW_R3": {nrpn: 133, type: "par", title: "i2s_in right to hdw_out right", range: "-128 24", unit: "dB/4"},
    "KYRP_KEYER": {nrpn: 134, type: "rel", title: "base of vox specialized keyer parameters"},
    "KYRP_TONE": {nrpn: 134, type: "par", title: "sidetone and IQ oscillator frequency", range: "0 16383", unit: "Hz/10", property: "keyerTone"},
    "KYRP_LEVEL": {nrpn: 135, type: "par", title: "sidetone level", range: "-128 24", default: "0", unit: "dB/4", property: "keyerLevel"},
    "KYRP_SPEED": {nrpn: 136, type: "par", title: "keyer speed control", range: "0 16384", unit: "WPM", property: "keyerSpeed"},
    "KYRP_WEIGHT": {nrpn: 137, type: "par", title: "keyer mark/space weight", range: "25 75", unit: "%", default: "50", property: "keyerWeight"},
    "KYRP_RATIO": {nrpn: 138, type: "par", title: "keyer dit/dah ratio", range: "25 75", unit: "%", default: "50", property: "keyerRatio"},
    "KYRP_FARNS": {nrpn: 139, type: "par", title: "Farnsworth keying speed", range: "0 127", default: "0", unit: "WPM", property: "keyerFarnsworth"},
    "KYRP_COMP": {nrpn: 140, type: "par", title: "keyer compensation", range: "-8192 8191", default: "0", unit: "sample", property: "keyerCompensation"},
    "KYRP_SPEED_FRAC": {nrpn: 141, type: "par", title: "keyer speed fraction", range: "0 127", default: "0", unit: "WPM/128", property: "keyerSpeedFraction"},
    "KYRP_KEYER_LAST": {nrpn: 142, type: "rel", title: "end of keyer block"},
    "KYRP_VOX_OFFSET": {nrpn: 8, type: "rel", title: "size of keyer parameter block"},
    "KYRP_VOX_NONE": {nrpn: 134, type: "rel", title: "base of default keyer parameters"},
    "KYRP_VOX_TUNE": {nrpn: 142, type: "rel", title: "base of tune keyer parameters"},
    "KYRP_VOX_S_KEY": {nrpn: 150, type: "rel", title: "base of straight key parameters"},
    "KYRP_VOX_PAD": {nrpn: 158, type: "rel", title: "base of paddle keyer parameters"},
    "KYRP_VOX_WINK": {nrpn: 166, type: "rel", title: "base of text from winkey parameters"},
    "KYRP_VOX_KYR": {nrpn: 174, type: "rel", title: "base of text from hasak parameters"},
    "KYRP_VOX_BUT": {nrpn: 182, type: "rel", title: "base of headset button keyer parameters"},
    "KYRV_ADC_NOTHING": {nrpn: 0, type: "val", label: "None", title: "pot controls nothing", property: "adcControls"},
    "KYRV_ADC_VOLUME": {nrpn: 1, type: "val", label: "Volume", title: "pot controls master volume", property: "adcControls"},
    "KYRV_ADC_SPEED": {nrpn: 136, type: "val", label: "Speed", title: "pot controls keyer speed", property: "adcControls"},
    "KYRV_ADC_LEVEL": {nrpn: 135, type: "val", label: "Level", title: "pot controls sidetone level", property: "adcControls"},
    "KYRV_ADC_TONE": {nrpn: 134, type: "val", label: "Tone", title: "pot controls sidetone pitch", property: "adcControls"},
    "KYRP_LAST": {nrpn: 190, type: "rel", title: "one past end of stored keyer parameters"},
    "KYRP_EXEC": {nrpn: 2000, type: "rel", title: "base of command nrpns"},
    "KYRP_WRITE_EEPROM": {nrpn: 2000, type: "cmd", title: "write nrpn+msgs to eeprom"},
    "KYRP_READ_EEPROM": {nrpn: 2001, type: "cmd", title: "read nrpn+msgs from eeprom"},
    "KYRP_SET_DEFAULT": {nrpn: 2002, type: "cmd", title: "load nrpn with default values"},
    "KYRP_ECHO_ALL": {nrpn: 2003, type: "cmd", title: "echo all set nrpns to midi"},
    "KYRP_SEND_WINK": {nrpn: 2004, type: "cmd", title: "send character value to wink vox"},
    "KYRP_SEND_KYR": {nrpn: 2005, type: "cmd", title: "send character value to kyr vox"},
    "KYRP_MSG_INDEX": {nrpn: 2006, type: "cmd", title: "set index into msgs"},
    "KYRP_MSG_WRITE": {nrpn: 2007, type: "cmd", title: "set msgs[index++] to value"},
    "KYRP_MSG_READ": {nrpn: 2008, type: "cmd", title: "read msgs[index++] and echo the value"},
    "KYRP_PLAY_WINK": {nrpn: 2009, type: "cmd", title: "queue message by number through wink"},
    "KYRP_PLAY_KYR": {nrpn: 2010, type: "cmd", title: "queue message by number through kyr"},
    "KYRP_INFO": {nrpn: 3000, type: "rel", title: "base of information nrpns"},
    "KYRP_VERSION": {nrpn: 3000, type: "inf", title: "version of hasak nrpn set"},
    "KYRP_NRPN_SIZE": {nrpn: 3001, type: "inf", title: "size of nrpn array"},
    "KYRP_MSG_SIZE": {nrpn: 3002, type: "inf", title: "send the size of msgs array"},
    "KYRP_SAMPLE_RATE": {nrpn: 3003, type: "inf", title: "sample rate of audio library", unit: "sps/100"},
    "KYRP_EEPROM_LENGTH": {nrpn: 3004, type: "inf", title: "result of EEPROM.length()", unit: "bytes"},
    "KYRP_ID_CPU": {nrpn: 3005, type: "inf", title: "which teensy microprocessor are we running"},
    "KYRP_ID_CODEC": {nrpn: 3006, type: "inf", title: "which codec are we running"},
    masterVolume: "KYRP_VOLUME",
    inputSelect: "KYRP_INPUT_SELECT",
    inputSelects: "KYRV_INPUT_*",
    inputLevel: "KYRP_INPUT_LEVEL",
    buttonLevel0: "KYRP_BUTTON_0",
    buttonLevel1: "KYRP_BUTTON_1",
    buttonLevel2: "KYRP_BUTTON_2",
    buttonLevel3: "KYRP_BUTTON_3",
    buttonLevel4: "KYRP_BUTTON_4",
    externalPTTRequire: "KYRP_PTT_ENABLE",
    iqModeSelect: "KYRP_IQ_ENABLE",
    iqModeSelects: "KYRV_IQ_*",
    iqAdjustPhase: "KYRP_IQ_ADJUST",
    txEnable: "KYRP_TX_ENABLE",
    sidetoneEnable: "KYRP_ST_ENABLE",
    iqAdjustBalance: "KYRP_IQ_BALANCE",
    sidetonePan: "KYRP_ST_PAN",
    outputEnable: "KYRP_OUT_ENABLE",
    debouncePeriod: "KYRP_DEBOUNCE",
    voice: "KYRP_VOICE",
    voices: "KYRV_VOX_*",
    pttHeadTime: "KYRP_HEAD_TIME",
    pttTailTime: "KYRP_TAIL_TIME",
    pttHangTime: "KYRP_HANG_TIME",
    keyerRiseTime: "KYRP_RISE_TIME",
    keyerFallTime: "KYRP_FALL_TIME",
    keyerRiseRamp: "KYRP_RISE_RAMP",
    keyerRamps: "KYRV_RAMP_*",
    keyerFallRamp: "KYRP_FALL_RAMP",
    paddleMode: "KYRP_PAD_MODE",
    paddleModes: "KYRV_MODE_*",
    paddleSwapped: "KYRP_PAD_SWAP",
    paddleAdapter: "KYRP_PAD_ADAPT",
    paddleAdapters: "KYRV_ADAPT_*",
    autoLetterSpace: "KYRP_AUTO_ILS",
    autoWordSpace: "KYRP_AUTO_IWS",
    paddleKeyer: "KYRP_PAD_KEYER",
    paddleKeyers: "KYRV_KEYER_*",
    channelCC: "KYRP_CHAN_CC",
    channelNote: "KYRP_CHAN_NOTE",
    noteLeftPaddle: "KYRP_NOTE_L_PAD",
    noteRightPaddle: "KYRP_NOTE_R_PAD",
    noteStraightKey: "KYRP_NOTE_S_KEY",
    noteExternalPTT: "KYRP_NOTE_EXT_PTT",
    noteKeyOut: "KYRP_NOTE_KEY_OUT",
    notePTTOut: "KYRP_NOTE_PTT_OUT",
    adc0Control: "KYRP_ADC0_CONTROL",
    adcControls: "KYRV_ADC_*",
    adc1Control: "KYRP_ADC1_CONTROL",
    adc2Control: "KYRP_ADC2_CONTROL",
    adc4Control: "KYRP_ADC3_CONTROL",
    adc3Control: "KYRP_ADC4_CONTROL",
    adcEnable: "KYRP_ADC_ENABLE",
    adcEnable: "KYRP_MIX_USB_L0",
    adcEnable: "KYRP_MIX_USB_L1",
    adcEnable: "KYRP_MIX_USB_L2",
    adcEnable: "KYRP_MIX_USB_L3",
    adcEnable: "KYRP_MIX_USB_R0",
    adcEnable: "KYRP_MIX_USB_R1",
    adcEnable: "KYRP_MIX_USB_R2",
    adcEnable: "KYRP_MIX_USB_R3",
    adcEnable: "KYRP_MIX_I2S_L0",
    adcEnable: "KYRP_MIX_I2S_L1",
    adcEnable: "KYRP_MIX_I2S_L2",
    adcEnable: "KYRP_MIX_I2S_L3",
    adcEnable: "KYRP_MIX_I2S_R0",
    adcEnable: "KYRP_MIX_I2S_R1",
    adcEnable: "KYRP_MIX_I2S_R2",
    adcEnable: "KYRP_MIX_I2S_R3",
    adcEnable: "KYRP_MIX_HDW_L0",
    adcEnable: "KYRP_MIX_HDW_L1",
    adcEnable: "KYRP_MIX_HDW_L2",
    adcEnable: "KYRP_MIX_HDW_L3",
    adcEnable: "KYRP_MIX_HDW_R0",
    adcEnable: "KYRP_MIX_HDW_R1",
    adcEnable: "KYRP_MIX_HDW_R2",
    adcEnable: "KYRP_MIX_HDW_R3",
    keyerTone: "KYRP_TONE",
    keyerLevel: "KYRP_LEVEL",
    keyerSpeed: "KYRP_SPEED",
    keyerWeight: "KYRP_WEIGHT",
    keyerRatio: "KYRP_RATIO",
    keyerFarnsworth: "KYRP_FARNS",
    keyerCompensation: "KYRP_COMP",
    keyerSpeedFraction: "KYRP_SPEED_FRAC",
    1: "KYRP_VOLUME",
    2: "KYRP_INPUT_SELECT",
    3: "KYRP_INPUT_LEVEL",
    4: "KYRP_BUTTON_0",
    5: "KYRP_BUTTON_1",
    6: "KYRP_BUTTON_2",
    7: "KYRP_BUTTON_3",
    8: "KYRP_BUTTON_4",
    9: "KYRP_PTT_ENABLE",
    10: "KYRP_IQ_ENABLE",
    11: "KYRP_IQ_ADJUST",
    12: "KYRP_TX_ENABLE",
    13: "KYRP_ST_ENABLE",
    14: "KYRP_IQ_BALANCE",
    15: "KYRP_ST_PAN",
    16: "KYRP_OUT_ENABLE",
    17: "KYRP_DEBOUNCE",
    18: "KYRP_VOICE",
    19: "KYRP_HEAD_TIME",
    20: "KYRP_TAIL_TIME",
    21: "KYRP_HANG_TIME",
    22: "KYRP_RISE_TIME",
    23: "KYRP_FALL_TIME",
    24: "KYRP_RISE_RAMP",
    25: "KYRP_FALL_RAMP",
    26: "KYRP_PAD_MODE",
    27: "KYRP_PAD_SWAP",
    28: "KYRP_PAD_ADAPT",
    29: "KYRP_AUTO_ILS",
    30: "KYRP_AUTO_IWS",
    31: "KYRP_PAD_KEYER",
    32: "KYRP_CHAN_CC",
    33: "KYRP_CHAN_NOTE",
    34: "KYRP_NOTE_L_PAD",
    35: "KYRP_NOTE_R_PAD",
    36: "KYRP_NOTE_S_KEY",
    37: "KYRP_NOTE_EXT_PTT",
    38: "KYRP_NOTE_KEY_OUT",
    39: "KYRP_NOTE_PTT_OUT",
    40: "KYRP_ADC0_CONTROL",
    41: "KYRP_ADC1_CONTROL",
    42: "KYRP_ADC2_CONTROL",
    43: "KYRP_ADC3_CONTROL",
    44: "KYRP_ADC4_CONTROL",
    45: "KYRP_ADC_ENABLE",
    110: "KYRP_MIX_USB_L0",
    111: "KYRP_MIX_USB_L1",
    112: "KYRP_MIX_USB_L2",
    113: "KYRP_MIX_USB_L3",
    114: "KYRP_MIX_USB_R0",
    115: "KYRP_MIX_USB_R1",
    116: "KYRP_MIX_USB_R2",
    117: "KYRP_MIX_USB_R3",
    118: "KYRP_MIX_I2S_L0",
    119: "KYRP_MIX_I2S_L1",
    120: "KYRP_MIX_I2S_L2",
    121: "KYRP_MIX_I2S_L3",
    122: "KYRP_MIX_I2S_R0",
    123: "KYRP_MIX_I2S_R1",
    124: "KYRP_MIX_I2S_R2",
    125: "KYRP_MIX_I2S_R3",
    126: "KYRP_MIX_HDW_L0",
    127: "KYRP_MIX_HDW_L1",
    128: "KYRP_MIX_HDW_L2",
    129: "KYRP_MIX_HDW_L3",
    130: "KYRP_MIX_HDW_R0",
    131: "KYRP_MIX_HDW_R1",
    132: "KYRP_MIX_HDW_R2",
    133: "KYRP_MIX_HDW_R3",
    134: "KYRP_TONE",
    135: "KYRP_LEVEL",
    136: "KYRP_SPEED",
    137: "KYRP_WEIGHT",
    138: "KYRP_RATIO",
    139: "KYRP_FARNS",
    140: "KYRP_COMP",
    141: "KYRP_SPEED_FRAC"
};