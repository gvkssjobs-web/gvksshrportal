# Oracle wallet setup

The error **"tnsnames.ora not found in ./wallet"** means the app is looking for the Oracle wallet in the path set in `.env` (`ORACLE_WALLET_PATH`), but the wallet files are not there.

## Steps

### 1. Download the wallet from Oracle Cloud

1. Open your **Autonomous Database** in Oracle Cloud (e.g. **gvksshrportal-db**).
2. Click **Database connection**.
3. Under **Download client credentials (Wallet)**:
   - Wallet type: **Instance wallet**
   - Click **Download wallet**.
4. Save the ZIP (e.g. `Wallet_gvksshrportal.zip`).

### 2. Extract the ZIP

- Unzip the file. You should get a folder containing:
  - `tnsnames.ora`
  - `sqlnet.ora`
  - `cwallet.sso`
  - `ewallet.pem`
  - `ewallet.p12`
  - (and possibly `keystore.jks`, `truststore.jks`)

### 3. Point `.env` to that folder

**Option A – use a `wallet` folder in the project**

1. In the project root (`gvksshrportal`), create a folder named `wallet`.
2. Copy **all** the extracted files into `wallet` (so that `wallet/tnsnames.ora` exists).
3. In `.env` keep:
   ```env
   ORACLE_WALLET_PATH=./wallet
   ```

**Option B – use the folder where you extracted the ZIP**

1. Extract the ZIP somewhere (e.g. `C:\oracle\Wallet_gvksshrportal`).
2. In `.env` set the **full path** to that folder:
   ```env
   ORACLE_WALLET_PATH=C:\oracle\Wallet_gvksshrportal
   ```
   (Use the path where you actually extracted it.)

### 4. Run again

```bash
npm run db:oracle:setup
```

**Check:** The folder in `ORACLE_WALLET_PATH` must contain `tnsnames.ora`. If it doesn’t, the path is wrong.
