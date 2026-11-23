/* ONE place for the backend address. Both index.html and Travel_Expense_Approval.html read this.
   Paste the HTTP-trigger URL of the single "TE_API" Power Automate flow (see SharePoint_Setup.md).
   Keep this URL private: anyone who has it can call the flow. */
window.EC_API_URL = "https://default000090a2d8654861ba6937e8e47451.72.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/06/workflows/3e28d9c989634cf7998ae5947caac01c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=c-oJJDrBSUHwWuMYlff2DtVwAMQrTDvFW72Mnt3oO7g";

/* Optional speed-up for big lists. Leave false until you have done the two flow edits described under
   "Split bills" in SharePoint_Setup.md (a Bills column; save writes it, get returns it). */
window.EC_SPLIT_BILLS = false;
