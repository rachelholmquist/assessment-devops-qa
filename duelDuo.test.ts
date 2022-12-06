
import { createPublicKey } from "crypto"
import { Builder, Capabilities, By, Button } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw button displays the div with id choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    expect(await choices.isDisplayed()).toBe(true)
})

test('clicking add to duo button displays div id=player duo', async () => {
    // const duoBtn = await driver.findElements(By.className('bot-btn'))
    const displayed = await driver.findElement(By.id('player-duo'))
    expect(await displayed.isDisplayed())
})