> ## Documentation Index
> Fetch the complete documentation index at: https://docs.dappnode.io/llms.txt
> Use this file to discover all available pages before exploring further.

---

# Register

## 1. Register as New User

Start by setting up your new account:

1. **Input** your desired **Username**.
2. **Select a secure password**. It should include a combination of characters, numbers, and special symbols for optimal security.
3. **Confirm your password** to ensure accuracy.
4. Click the **Register** button.

<p align="center">
    <img width="50%" src="/img/register.png" alt="Register"/>
</p>

## 2. Secure Your Recovery Token

Upon successful registration, you'll be provided with a Recovery Token. This token is crucial for:

- Retrieving your password if forgotten.
- Regaining account access if needed.

  **To safeguard your token**:

- Click the button or link labeled "View Recovery Token".
- Diligently copy the token and store it in a safe location.

:::caution
We recommend that you store your token in both digital (encrypted) and physical forms (noted and stored securely). If you lose access to both your password and token, you will lose access to your account.
:::

<p align="center">
    <img width="50%" src="/img/register-token.png" alt="Recovery Token"/>
</p>

## 3. Logging In

With your account ready and Recovery Token secured:

1. Proceed to the **Login** page.
2. Input your **Username** and **Password**.
3. Press the **Login** button to dive into your Dappnode account.

<p align="center">
    <img width="50%" src="/img/register-login.png" alt="Login"/>
</p>

---

### Troubleshooting

<details>
  <summary><b>Want to change your password?</b></summary>

Visit <a href="http://my.dappnode/system/profile">Profile Settings</a> to reset it.
</details>

<details>
  <summary><b>Forgot your password?</b></summary>

Go to the <a href="http://my.dappnode/">Login</a> page and click on "Forgot your password?". You'll be prompted to enter the recovery token you saved during registration. Once entered, you'll be able to reset your password.
</details>

<details>
  <summary><b>Lost your recovery token?</b></summary>
  
If you've lost your recovery token, there is still a chance to regain access to the Dappmanager UI. However, you will require <a href="/docs/user/access-your-dappnode/terminal">accessing via terminal</a>. Once you are in, you can get your recovery token by running the following command:

```bash
cat /usr/src/dappnode/DNCORE/admin-recovery-token.txt
```

</details>
