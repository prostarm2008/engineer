/* ONE place for the backend address. Both index.html and Travel_Expense_Approval.html read this.
   Paste the HTTP-trigger URL of the single "TE_API" Power Automate flow (see SharePoint_Setup.md).
   Keep this URL private: anyone who has it can call the flow. */
window.EC_API_URL = "https://default000090a2d8654861ba6937e8e47451.72.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/26/workflows/58da7fa3b05047deb3cb5a154343913e/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wfCj59thMcGUHvoii24pJ9yTMThly88WtCSxDLzFReU";

/* Optional speed-up for big lists. Leave false until you have done the two flow edits described under
   "Split bills" in SharePoint_Setup.md (a Bills column; save writes it, get returns it). */
window.EC_SPLIT_BILLS = false;
