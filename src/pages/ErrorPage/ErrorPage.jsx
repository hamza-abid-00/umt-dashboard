import React from "react";

const ErrorPage = () => {
  return (
    <div className="font-sans mx-auto max-w-6xl">
      {/* Header */}
      <h1 className="text-2xl font-bold text-red-600 py-4">
        Server Error in '/' Application.
      </h1>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-4" />

      {/* Error message */}
      <div className="mb-4">
        <p className="text-red-800 italic font-medium">
          The request failed with HTTP status 503: Server Error.
        </p>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="font-bold">Description:</p>
        <p className="ml-4 text-sm">
          An unhandled exception occurred during the execution of the current
          web request. Please review the stack trace for more information about
          the error and where it originated in the code.
        </p>
      </div>

      {/* Exception Details */}
      <div className="mb-4">
        <p className="font-bold">Exception Details:</p>
        <p className="ml-4 text-sm">
          System.Net.WebException: The request failed with HTTP status 503:
          Server Error.
        </p>
      </div>

      {/* Source Error */}
      <div className="mb-4">
        <p className="font-bold">Source Error:</p>

        {/* Code snippet */}
        <div className="bg-yellow-100 p-3 my-2 overflow-x-auto">
          <pre className="text-xs font-mono">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1">Line 28:</div>
              <div className="col-span-11"></div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1">Line 29:</div>
              <div className="col-span-11"> if (reportParameters != null)</div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1 text-red-600 font-bold">Line 30:</div>
              <div className="col-span-11 text-red-600 font-bold">
                {" "}
                Roadmap_Report.ServerReport.SetParameters(reportParameters);
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1">Line 31:</div>
              <div className="col-span-11">
                {" "}
                Roadmap_Report.ShowPrintButton = false;
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-1">Line 32:</div>
              <div className="col-span-11">
                {" "}
                Roadmap_Report.ShowToolBar = false;
              </div>
            </div>
          </pre>
        </div>
      </div>

      {/* Source File */}
      <div className="mb-4">
        <p className="font-bold">Source File:</p>
        <p className="ml-4 text-sm">
          c:\online.umt.edu.pk\Reports\Roadmap.aspx
        </p>
        <p className="ml-4 text-sm">
          <span className="font-bold">Line:</span> 30
        </p>
      </div>

      {/* Stack Trace */}
      <div className="mb-4">
        <p className="font-bold">Stack Trace:</p>

        {/* Stack Trace Content */}
        <div className="bg-yellow-100 p-3 my-2 overflow-x-auto">
          <pre className="text-xs font-mono leading-5">
            {`[WebException: The request failed with HTTP status 503: Server Error.]
   Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution.RSExecutionConnection.GetSecureMethods() +179
   Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution.RSExecutionConnection.IsSecureMethod(String methodname) +63
   Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution.RSExecutionConnection.SetConnectionSSLForMethod(String methodname) +16
   Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution.ProxyMethodInvocation.Execute(RSExecutionConnection connection, ProxyMethod'1 sql10Method, ProxyMethod'1 katmaiMethod, ProxyMethod'1 yukonMethod) +914
   Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution.RSExecutionConnection.LoadReport(String Report, String HistoryID) +360
   Microsoft.Reporting.WebForms.SoapReportExecutionService.LoadReport(String report, String historyId) +33
   Microsoft.Reporting.WebForms.ServerReport.EnsureExecutionSession() +147
   Microsoft.Reporting.WebForms.ServerReport.SetParameters(IEnumerable'1 parameters) +81
   ASP.reports_roadmap_aspx.Page_Load(Object sender, EventArgs e) in c:\\online.umt.edu.pk\\Reports\\Roadmap.aspx:30
   System.Web.UI.Control.OnLoad(EventArgs e) +99
   System.Web.UI.Control.LoadRecursive() +154
   System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint) +4082`}
          </pre>
        </div>
      </div>

      {/* Version Information */}
      <div className="mb-4">
        <p className="font-bold">Version Information:</p>
        <p className="ml-4 text-sm">
          Microsoft .NET Framework Version:4.0.30319; ASP.NET Version:4.7.4108.0
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
