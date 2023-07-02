target = document.getElementById('default_panel')

target.innerHTML =  " <span id=\"lblschoolsub\" class=\"heading\">Bacup & Rawtenstall Grammar School</span><div id=\"divlogin\" class=\"main-content-panel\" style=\"color: white\"><div class=\"subheading\">Login</div><div id=\"loginContainer\"><div style=\"margin-bottom: 10px;\"><div style=\"font-weight: 600;\">Email or Username</div><input name=\"txtemail\" type=\"text\" id=\"txtemail\" style=\"font-family: Open Sans;\"></div><div><div style=\"font-weight: 600;\">Password</div><input name=\"txtpassword\" type=\"password\" id=\"txtpassword\" style=\"width: 200px; font-family: Open Sans;\"></div></div><div style=\"float: left; height: 32px; margin-right: 6px;\"><a href=\"javascript:void(0)\" class=\"btn\" id=\"loginbtn\" onclick=\"alert('hello')\">LOGIN</a><a href=\"javascript:void(0)\" class=\"btn\" style=\"display: none\" id=\"loginbtnpressed\">PLEASE WAIT</a></div><div id=\"ssocontainer\"><div style=\"float: left; height: 34px;margin-right:7px;\"><a href=\"javascript:void(0)\" id=\"externalbtn\" class=\"btn\" style=\"background-color:white;color: black;\" onclick=\"clickexternallogin()\"><img src=\"/_images/SS-SSO-login.png\" style=\"height: 13px; vertical-align: sub; padding-right: 5px;\">Microsoft</a></div><div style=\"float: left; height: 32px;\"></div></div><div style=\"float: left; clear: both;\"><a href=\"javascript:void(0)\" class=\"btn\" onclick=\"clickforgotpassword()\">RESET PASSWORD</a><br><br><a href=\"javascript:void(0);\" onclick=\"clickregisterparent()\" class=\"btn\">REGISTER PARENT ACCOUNT</a></div><input type=\"submit\" name=\"btnlogin1\" value=\"LOGIN1\" id=\"btnlogin1\" class=\"btn\" style=\"display: none\"><input type=\"submit\" name=\"btnlogout\" value=\"logout\" id=\"btnlogout\" class=\"btn\" style=\"display: none\"><input type=\"submit\" name=\"btnexternal\" value=\"MICROSOFT\" id=\"btnexternal\" class=\"btn\" style=\"display: none\"><input type=\"submit\" name=\"btngoogleexternal\" value=\"GOOGLE\" id=\"btngoogleexternal\" class=\"btn\" style=\"display: none\"></div><div id=\"divforgot\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Reset Password</div> Please enter your email address and <strong>click</strong> Reset Password. <strong>Click, do not press enter.</strong><br><br> If your email exists, an email will be sent with instructions on how to complete your password reset.<br><br><table class=\"datatable\"><tbody><tr><td style=\"width: 50px; vertical-align: middle;\">Email</td><td style=\"width: 200px;\"><table id=\"txtemailreset_ET\" class=\"dxeValidStEditorTable dxeRoot_Metropolis\"><tbody><tr><td id=\"txtemailreset_CC\" class=\"dxeErrorFrame_Metropolis dxeErrorFrameSys dxeNoBorderRight dxeControlsCell_Metropolis\" style=\"vertical-align:middle;\"><table class=\"dxeTextBoxSys dxeTextBox_Metropolis dxeTextBoxDefaultWidthSys\" id=\"txtemailreset\" style=\"width:240px;\"><tbody><tr><td class=\"dxic\" style=\"width:100%;\"><input class=\"dxeEditArea_Metropolis dxeEditAreaSys\" id=\"txtemailreset_I\" name=\"txtemailreset\" onchange=\"ASPx.EValueChanged('txtemailreset')\" type=\"text\"></td></tr></tbody></table></td><td id=\"txtemailreset_EC\" class=\"dxeErrorCell_Metropolis dxeErrorFrame_Metropolis dxeErrorFrameSys dxeErrorCellSys dxeNoBorderLeft\" style=\"vertical-align:middle;visibility:hidden;white-space:nowrap;\">Invalid value</td></tr></tbody></table><script id=\"dxss_703440461\" data-executed=\"true\">  </script></td></tr></tbody></table><div style=\"padding-top: 22px; padding-bottom: 8px;\"><input type=\"submit\" name=\"btnforgotpass\" value=\"Reset Password\" id=\"btnforgotpass\" style=\"display: none\"><a href=\"javascript:void(0);\" onclick=\"clickstartresetpassword()\" class=\"btn\">RESET PASSWORD</a>   <a href=\"javascript:void(0);\" onclick=\"clickcancelforgotpassword()\" class=\"btn\">CANCEL</a></div></div><div id=\"divforgotmsg\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Reset Password</div><div> If your email exists, an email will be sent with instructions on how to reset your password. Please allow upto 20 minutes for this email to deliver. <br><br> The email will be sent from <span id=\"span_schoolEmail\">brgs@email.schoolsynergy.co.uk</span>. <br><br> Please check your spam/junk folders. </div></div><div id=\"divresend\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Email Verification</div><div> A verification email has been sent. <br><br> Please be sure to check your spam/junk folders for the verification email. <br><br> If you're still unable to find the verification email, please contact your school. <br><br><a href=\"/default.aspx\" class=\"btn\">Go to login</a></div></div><div id=\"divreset\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Reset Password</div> Please enter a new password and <strong>click</strong> Change Password. <strong>Click, do not press enter.</strong><br><br><table><tbody><tr><td style=\"width: 135px;\">Password</td><td><table id=\"txtresetpassword_ET\" class=\"dxeValidDynEditorTable dxeRoot_Metropolis\"><tbody><tr><td id=\"txtresetpassword_CC\"><table class=\"dxeTextBoxSys dxeTextBox_Metropolis dxeTextBoxDefaultWidthSys\" id=\"txtresetpassword\" style=\"width:150px;\"><tbody><tr><td class=\"dxic\" style=\"width:100%;\"><input class=\"dxeEditArea_Metropolis dxeEditAreaSys\" id=\"txtresetpassword_I\" name=\"txtresetpassword\" onchange=\"ASPx.EValueChanged('txtresetpassword')\" type=\"password\"></td></tr></tbody></table></td></tr><tr style=\"display: none;\"><td id=\"txtresetpassword_EC\" class=\"dxeErrorCell_Metropolis dxeErrorFrame_Metropolis dxeErrorFrameSys dxeErrorCellSys dxeNoBorderTop\" style=\"display:none;white-space:nowrap;\">Invalid value</td></tr></tbody></table><script id=\"dxss_360291071\" data-executed=\"true\">  </script><span style=\"font-size: 12px;\">* Include a mixture of capital letters, numbers and a symbol e.g. wj55hHd!</span></td></tr><tr><td>Password suitability</td><td><span class=\"dxeBase_Metropolis\" id=\"lbresetpassword\">Empty</span><script id=\"dxss_297581553\" data-executed=\"true\">  </script><table id=\"resetpasswordstrengthbar\" class=\"pwdBlankBar\" style=\"height: 4px; width: 220px; margin-bottom: 4px;\" border=\"0\"><tbody><tr><td id=\"resetpositiveBar\" class=\"positiveBar\"></td><td id=\"resetnegativeBar\" class=\"negativeBar\"></td></tr></tbody></table></td></tr><tr><td>Re-enter password</td><td><table id=\"txtresetpasswordconfirm_ET\" class=\"dxeValidDynEditorTable dxeRoot_Metropolis\"><tbody><tr><td id=\"txtresetpasswordconfirm_CC\"><table class=\"dxeTextBoxSys dxeTextBox_Metropolis dxeTextBoxDefaultWidthSys\" id=\"txtresetpasswordconfirm\" style=\"width:150px;\"><tbody><tr><td class=\"dxic\" style=\"width:100%;\"><input class=\"dxeEditArea_Metropolis dxeEditAreaSys\" id=\"txtresetpasswordconfirm_I\" name=\"txtresetpasswordconfirm\" onchange=\"ASPx.EValueChanged('txtresetpasswordconfirm')\" type=\"password\"></td></tr></tbody></table></td><td id=\"txtresetpasswordconfirm_EC\" class=\"dxeErrorCell_Metropolis dxeErrorFrame_Metropolis dxeErrorFrameSys dxeErrorCellSys dxeNoBorderLeft\" style=\"vertical-align:middle;white-space:nowrap;display:none;white-space:nowrap;\">Invalid value</td></tr></tbody></table><script id=\"dxss_1259098097\" data-executed=\"true\">  </script></td></tr></tbody></table><br><br><a href=\"javascript:void(0)\" onclick=\"checkresetpassword()\" class=\"btn\">CHANGE PASSWORD</a>   <input type=\"submit\" name=\"btnresetpassword\" value=\"Reset\" id=\"btnresetpassword\" style=\"display: none\"><input type=\"submit\" name=\"btnresendemail\" value=\"Resend\" id=\"btnresendemail\" style=\"display: none\"></div><div id=\"divresetsuccess\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Reset Password</div> Your password reset has been successful. <br><br><strong>Click</strong> Login below. <br><br><br><a href=\"javascript:void(0)\" class=\"btn\" onclick=\"clicklogin()\">LOGIN</a></div><div id=\"divresetfail\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Reset Password</div> Your password reset has failed. Please click close to start the process again. <br><br> If you experience difficulties please contact School Synergy support. <br><br><a href=\"/default.aspx?x\" class=\"btn\">Close</a></div><div id=\"divloginfail\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Login Failed</div><span id=\"spanfail\"></span><br><a href=\"/default.aspx?x\" class=\"btn\">Go to login</a><div id=\"divDebug\" style=\"display: none;\"><div style=\"padding-top: 20px\"><b>Debug Log:</b><br><span id=\"debugInfo\"></span></div></div></div><div id=\"divtwofactor_pending\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Verification Required</div> Please check your email for an authentication code. Enter the code or click the link within the email. <br><br> Enter code: <input name=\"txtCode\" type=\"text\" maxlength=\"4\" id=\"txtCode\" onkeyup=\"CodeCheck()\" style=\"width: 60px; font-family: Open Sans;\"><br><br><span id=\"spantwofactor\" style=\"display: none; font-weight: bold\">Incorrect Code</span><a onclick=\"CodeVerify()\" class=\"btn btnsmall\">SUBMIT CODE</a><a href=\"/default.aspx?x\" class=\"btn btnsmall\">Go back to login</a><br><br><br><div class=\"ssloader\"></div><br><br></div><div id=\"divtwofactor_success\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Verification Successful</div> Thank you for confirming your identity. <br><br> You are now being logged into your account. <br></div><div id=\"divtwofactor_expired\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Verification Failed</div> This link has expired or you have exceeded 3 attempts. <br><br> Please try logging in again to restart the process. <br><br><a href=\"/default.aspx?x\" class=\"btn btnsmall\">Go back to login</a></div><div id=\"divsso_notfound\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Login Failed</div> The Microsoft/Google account used to authenticate does not exist within Synergy. <br><br> Please sign out and try again using your School Email. <br><br><a onclick=\"clicksignout()\" class=\"btn btnsmall\">Sign Out</a></div><div id=\"divsso_disabled\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Login Failed</div> The Microsoft/Google account used to authenticate has been disabled. <br><br> Please contact your School Administrator. <br><br><a onclick=\"clicksignout()\" class=\"btn btnsmall\">Sign Out</a></div><div id=\"divsso_unsupported\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Login Failed</div> Microsoft/Google Single Sign-On is unsupported on this browser/device combination. <br><br> Click the 'GO BACK TO LOGIN' button to login using your email and password. Use the 'RESET PASSWORD' button if you need to reset your Synergy password. <br><br><a href=\"/default.aspx?x\" class=\"btn btnsmall\">Go back to login</a></div><div id=\"divsso_disabled_staff\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Login Failed</div> Microsoft/Google Single Sign-On has been disabled for staff. <br><br> Please contact your School Administrator. <br><br><a onclick=\"clicksignout()\" class=\"btn btnsmall\">Sign Out</a></div><div id=\"divsso_disabled_student\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Login Failed</div> Microsoft/Google Single Sign-On has been disabled for students. <br><br> Please contact your School Administrator. <br><br><a onclick=\"clicksignout()\" class=\"btn btnsmall\">Sign Out</a></div><div id=\"divtransfer_invalid\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Transfer Failed</div> Something went wrong during your transfer. <br><br> Please try again or contact support. </div><div id=\"divexternal_blocked\" class=\"main-content-panel\" style=\"display: none;\"><div class=\"subheading\">Access Blocked</div> Your account is unable to login outside your School. <br><br> Please contact your School Administrator. <br><br><a href=\"/default.aspx?x\" class=\"btn btnsmall\">Go back to login</a></div><div id=\"about_schoolsynergy\" onclick=\"pageopen('http://www.schoolsynergy.co.uk/')\"></div> " 