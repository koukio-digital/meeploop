# How to Connect Growcell Contact Form to Google Sheets

Follow these quick steps (takes ~2 minutes) to have every inquiry submitted on the website appear in your Google Sheet in real time:

---

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. In the first row (Row 1), add these column headers:
   - **Column A**: `Timestamp`
   - **Column B**: `Name`
   - **Column C**: `Company`
   - **Column D**: `Phone`
   - **Column E**: `Email`
   - **Column F**: `Service`
   - **Column G**: `Message`

---

### Step 2: Open Google Apps Script
1. In your Google Sheet menu bar, click **Extensions** > **Apps Script**.
2. Delete any existing code in the editor and paste the following snippet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;
    
    sheet.appendRow([
      data.Timestamp || new Date().toLocaleString(),
      data.Name || '',
      data.Company || '',
      data.Phone || '',
      data.Email || '',
      data.Service || '',
      data.Message || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the **Save** icon (disk icon).

---

### Step 3: Deploy as Web App
1. At the top right, click **Deploy** > **New deployment**.
2. For *Select type*, click the **Gear** icon and choose **Web app**.
3. Fill in:
   - **Description**: `Growcell Contact Form`
   - **Execute as**: `Me (your Google email)`
   - **Who has access**: `Anyone` *(Important: select "Anyone" so the website can post to it without requiring Google login)*
4. Click **Deploy**.
5. If prompted, click **Authorize access**, select your Google account, click **Advanced**, and click **Go to Untitled project (unsafe)** to grant write access to your sheet.
6. Copy the **Web app URL** (it looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

---

### Step 4: Add to your Project
In your project folder (`po/`), create or edit `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
```

Restart your dev server (`npm run dev`) or rebuild. Any submission in the contact form will now instantly add a new row to your Google Sheet!
