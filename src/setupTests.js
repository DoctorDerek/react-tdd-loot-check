import "jsdom-global/register" // gets us mount functionality in Enzyme
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter(), disableLifecycleMethods: true })
