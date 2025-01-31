// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('01-view-projects', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('01-view-projects', async function() {
    await driver.get("http://localhost:5173/")
    await driver.manage().window().setRect(1936, 1056)
    await driver.findElement(By.css(".MuiListItem-root:nth-child(2) .MuiTypography-root")).click()
    {
      const element = await driver.findElement(By.css(".MuiListItem-root:nth-child(2) .MuiButtonBase-root:nth-child(3)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".MuiListItem-root:nth-child(3) .MuiButtonBase-root:nth-child(3)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".MuiListItem-root:nth-child(1) .MuiButtonBase-root:nth-child(3)")).click()
  })
})
