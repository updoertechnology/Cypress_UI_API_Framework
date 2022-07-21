// <reference types="cypress" />

import { utils } from "../utils/utils"

const locatorname = '{locator ID}' 

export class methods {

    methodname() {
        utils.click(locatorname)
    }
}

export const firstpage = new methods()