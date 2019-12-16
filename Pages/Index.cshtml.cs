using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Antonio_YenChiou.Pages
{
    public class IndexModel : PageModel
    {
        private string[] supportedLanguages = { "en-US", "es-ES" };
        public void OnGet()
        {
            var languageCulture = GetLanguage();

            var newCulture = languageCulture ?? new CultureInfo("en-US");

            CultureInfo.DefaultThreadCurrentCulture = newCulture;
            CultureInfo.DefaultThreadCurrentUICulture = newCulture;
        }

        private CultureInfo GetLanguage()
        {
            var cultureToReturn = "en-US";

            var languageCookie = Request.Cookies["UserCulture"];

            if (languageCookie != null)
            {
                cultureToReturn = languageCookie;
            }
            else
            {
                cultureToReturn = Request.Headers["Accept-Language"].ToString().Split(";").FirstOrDefault()?.Split(",").FirstOrDefault(); ;
            }

            if (supportedLanguages.Contains(cultureToReturn))
            {
                return new CultureInfo(cultureToReturn);
            }
            else
            {
                return new CultureInfo("en-US");
            }

        }
    }
}
