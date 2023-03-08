import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import modalCode from './features/modal'
import textRoll from './features/textRoll'

gsap.registerPlugin(ScrollTrigger)

modalCode()
textRoll('.text-roll', '.text-roll-link')
textRoll('.text-roll-inverse', '.text-roll-link-inverse')
