describe('Saucedemo Login Tests', () => {
    it('should login successfully with valid credentials', async () => {
      await browser.url('https://kasirdemo.belajarqa.com/');
  
      // Input valid username and password
      await $('#email').setValue('standard_user');
      await $('#password').setValue('secret_sauce');
  
      // Click login button
      await $('.chakra-button').click();
  
      // Assertion on the URL or any other element to verify successful login
      await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/login');
    });
    
  });