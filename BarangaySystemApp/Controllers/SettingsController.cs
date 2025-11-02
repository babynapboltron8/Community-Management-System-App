using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BarangaySystemApp.Controllers
{
    public class SettingsController : Controller
    {
        // GET: Settings
        public ActionResult General()
        {
            return View();
        }
        public ActionResult Users()
        {
            return View();
        }
        public ActionResult Theme()
        {
            return View();
        }
    }
}