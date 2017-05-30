import assert from 'assert';
import webdriver from 'selenium-webdriver';
import test from 'selenium-webdriver/testing';
import config from 'config';

let driver;

const mochaTimeoutMS = config.get( 'mochaTimeoutMS' );

test.describe( 'Ralph Says', function() {
	this.timeout( mochaTimeoutMS );


	test.it( 'shows a quote container', function() {
		driver = new webdriver.Builder()
		      .withCapabilities( webdriver.Capabilities.chrome() )
		      .build();
		driver.get("http://www.google.com");
		driver.findElement(webdriver.By.name('q') )
		    .sendKeys('webdriver' );  
		driver.findElement(webdriver.By.name('btnG') )
		    .click();     
		// var page = new RalphSaysPage( driver, true );
		// page.quoteContainerPresent().then( function( present ) {
		// 	assert.equal( present, true, 'Quote container not displayed' );
		// } );
	} );


	test.afterEach( () => driver.manage().deleteAllCookies() );

	test.after( () => driver.quit() );
});
