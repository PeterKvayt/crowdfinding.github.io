#pragma checksum "D:\Soft\My programs\Example2\Example2\Views\Main\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "3cf950eec775b8060224e81d158ec73762b92c03"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Main_Index), @"mvc.1.0.view", @"/Views/Main/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Main/Index.cshtml", typeof(AspNetCore.Views_Main_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "D:\Soft\My programs\Example2\Example2\Views\_ViewImports.cshtml"
using Example2;

#line default
#line hidden
#line 2 "D:\Soft\My programs\Example2\Example2\Views\_ViewImports.cshtml"
using Example2.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3cf950eec775b8060224e81d158ec73762b92c03", @"/Views/Main/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0cfd042576314f05ae7a579bde5c6c8d6a99f4fe", @"/Views/_ViewImports.cshtml")]
    public class Views_Main_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/Main/Index"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("nav-link"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/Main/AllProjects"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/projectCard.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/rewardCard.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/slider.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/index.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(59, 80, true);
            WriteLiteral("\r\n\r\n    <nav id=\"navbar\" class=\"navbar navbar-expand-lg navbar-light\">\r\n        ");
            EndContext();
            BeginContext(139, 161, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3cf950eec775b8060224e81d158ec73762b92c035701", async() => {
                BeginContext(162, 134, true);
                WriteLiteral("\r\n            <img src=\"http://www.polessu.by/sites/all/themes/danland/logo.png\" height=\"50\"\r\n                 alt=\"logo\" />\r\n        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(300, 381, true);
            WriteLiteral(@"
        <button class=""navbar-toggler"" type=""button"" data-toggle=""collapse"" data-target=""#navbarContent"">
            <span class=""navbar-toggler-icon""></span>
        </button>
        <div id=""navbarContent"" class=""collapse navbar-collapse justify-content-center"">
            <ul class=""navbar-nav text-center"">
                <li class=""nav-item"">
                    ");
            EndContext();
            BeginContext(681, 100, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3cf950eec775b8060224e81d158ec73762b92c037531", async() => {
                BeginContext(727, 50, true);
                WriteLiteral("ВСЕ ПРОЕКТЫ <span class=\"fa fa-book fa-fw\"></span>");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(781, 15346, true);
            WriteLiteral(@"
                </li>
                <li class=""nav-item"">
                    <a class=""nav-link"" href=""create-project-rules.html"">
                        СОЗДАТЬ ПРОЕКТ <span class=""fa fa-pencil fa-fw""></span>
                    </a>
                </li>
                <li class=""nav-item"">
                    <a class=""nav-link"" href=""how-it-works.html"">ПОМОЩЬ <span class=""fa fa-info fa-fw""></span></a>
                </li>
                <li class=""nav-item"">
                    <a class=""nav-link"" href=""search.html"">ПОИСК <span class=""fa fa-search fa-fw""></span></a>
                </li>
                <li class=""nav-item"">
                    <a href=""#modalEnter"" data-toggle=""modal"" class=""nav-link"">
                        ВОЙТИ <span class=""fa fa-sign-in fa-fw""></span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <div class=""box""></div>
    <!-- Модальные окна -->
    <div class=""modal fade"" id=""modalEnter"">
        <di");
            WriteLiteral(@"v class=""modal-dialog"">
            <div class=""modal-content"">
                <div class=""modal-body"">
                    <!-- вход -->
                    <div id=""enter-modal"" class=""my-modal-content-active"">
                        <button class=""closeBtn"" id=""modalEnterClose"" data-dismiss=""modal"">&times;</button>
                        <h4 class=""title"">Вход</h4>
                        <p>
                            <input class=""inputBox email-input"" type=""text"" placeholder=""Email"">
                        </p>
                        <p>
                            <div class=""social-input-box password-input"">
                                <span class=""fa fa-eye-slash fa-fw""></span>
                                <input class=""social-input"" type=""password"" placeholder=""Пароль"">
                            </div>
                        </p>
                        <p class=""modalLink"">
                            <span id=""forgot-password-btn"" class=""link"">Забыли пароль?</span>");
            WriteLiteral(@"
                        </p>
                        <p>
                            <span class=""category modal-enter-btn"">ВОЙТИ</span>
                        </p>
                        <p>
                            <span class=""category modal-registration-btn"">ЗАРЕГИСТРИРОВАТЬСЯ</span>
                        </p>
                    </div>
                    <!-- регистрация -->
                    <div id=""registration-modal"" class=""my-modal-content"">
                        <button class=""closeBtn"" id=""modalEnterClose"" data-dismiss=""modal"">&times;</button>
                        <h4 class=""title"">Регистрация</h4>
                        <p>
                            <input class=""inputBox"" type=""text"" placeholder=""Имя Фамилия"">
                        </p>
                        <p>
                            <input class=""inputBox email-input"" type=""text"" placeholder=""Email"">
                        </p>
                        <div class=""row"" style=""margin-bottom:7px;"">
            WriteLiteral(@"
                            <div class=""col-lg-11 col-md-11 col-sm-11"">
                                <div class=""social-input-box password-input"">
                                    <span class=""fa fa-eye-slash fa-fw""></span>
                                    <input id=""registration-password-input-modal"" class=""social-input"" type=""password"" placeholder=""Пароль"">
                                </div>
                            </div>
                            <div class=""col-lg-1 col-md-1 col-sm-1"">
                                <div id=""modal-password-status-box"" class=""modal-password-status"">
                                    <span id=""password-security-pict-modal"" class=""fa fa-unlock fa-fw""></span>
                                </div>
                            </div>
                        </div>
                        <div class=""row"">
                            <div class=""col-lg-11 col-md-11 col-sm-11"">
                                <div class=""social-input-box passw");
            WriteLiteral(@"ord-input"">
                                    <span class=""fa fa-eye-slash fa-fw""></span>
                                    <input id=""second-registration-password-input-modal"" class=""social-input"" type=""password"" placeholder=""Повторите пароль"">
                                </div>
                            </div>
                            <div class=""col-lg-1 col-md-1 col-sm-1"">
                                <div class=""modal-password-status"">
                                    <span id=""second-registration-password-status-modal"" class=""fa fa-exclamation-circle fa-fw""></span>
                                </div>
                            </div>
                        </div>
                        <p class=""modalLink modalConditionRegistration"">
                            Нажимая кнопку зарегистрироваться, вы автоматически подтверждаете,
                            что ознакомлены и согласны с <a class=""link"" href=""agreement.html"">Пользовательским соглашением</a>
            ");
            WriteLiteral(@"                платформы Poless Invest.
                        </p>
                        <p>
                            <span class=""category modal-registration-btn"">ЗАРЕГИСТРИРОВАТЬСЯ</span>
                        </p>
                        <p>
                            <span class=""category modal-enter-btn"">ВОЙТИ</span>
                        </p>
                    </div>
                    <!-- восстановление пароля -->
                    <div id=""password-recovery-modal"" class=""my-modal-content"">
                        <button class=""closeBtn"" id=""modalEnterClose"" data-dismiss=""modal"">&times;</button>
                        <h4 class=""title"">Восстановление пароля</h4>
                        <p>
                            <input class=""inputBox email-input"" type=""text"" placeholder=""Email"">
                        </p>
                        <p>
                            Для восстановления пароля необходимо ввести почту, с которой связан ваш аккаунт.
                ");
            WriteLiteral(@"            На нее будет отправлено сообщение для восстановления пароля.
                        </p>
                        <p>
                            <span class=""category modal-recovery-btn"" href=""#"">ВОССТАНОВИТЬ</span>
                        </p>
                        <p>
                            <span class=""category modal-enter-btn"">ВОЙТИ</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id=""main"">
        <div class=""container-fluid"">
            <div class=""container"">
                <!-- слайдер с проектами -->
                <div class=""row"">
                    <div class=""col"">
                        <div id=""block-for-slider"">
                            <div id=""viewport"">
                                <div id=""slidewrapper""></div>
                                <div id=""prev-next-btns"">
                                    <div class=""row""></div>
                   ");
            WriteLiteral(@"                 <button id=""prev-btn"" class="".my-btn"">
                                        <div class=""left-arrow"" href=""""></div>
                                    </button>
                                    <button id=""next-btn"" class="".my-btn"">
                                        <div class=""right-arrow"" href=""""></div>
                                    </button>
                                </div>
                                <div id=""nav-btns"">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Популярные проекты -->
                <div class=""row"">
                    <div class=""col"">
                        <div>
                            <h2 class=""title"">Популярные проекты</h2>
                        </div>
                    </div>
                </div>
                <div id=""popular-projects"" class=""row""></div>
               ");
            WriteLiteral(@" <div class=""row"">
                    <div class=""col"">
                        <div class=""title"">
                            <a class=""my-btn"" href=""all-projects.html"">ПОСМОТРЕТЬ ВСЕ</a>
                        </div>
                    </div>
                </div>
                <!-- Рекомендованные проекты -->
                <div class=""row"">
                    <div class=""col"">
                        <div>
                            <h2 class=""title"">Рекомендованные проекты</h2>
                        </div>
                    </div>
                </div>
                <div id=""recomended-projects"" class=""row""></div>
                <div class=""row"">
                    <div class=""col"">
                        <div class=""title"">
                            <a class=""my-btn"" href=""all-projects.html"">ПОСМОТРЕТЬ ВСЕ</a>
                        </div>
                    </div>
                </div>
                <!-- Вознаграждения -->
                <div class=""r");
            WriteLiteral(@"ow"">
                    <div class=""col"">
                        <div>
                            <h2 class=""title"">Вознаграждения, которые вас заинтересуют</h2>
                        </div>
                    </div>
                </div>
                <div id=""rewards"" class=""row""></div>
                <!-- Категории проектов -->
                <div class=""row"">
                    <div class=""col"">
                        <div>
                            <h2 class=""title"" style=""color: white;"">Категории проектов</h2>
                        </div>
                    </div>
                </div>
                <div class=""row"">
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Дизайн</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Еда</a>
                    </div>
                    <div class=""col-lg-3 col-md-");
            WriteLiteral(@"6 col-sm-6"">
                        <a class=""category"" href=""#"">Игры</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Искусство</a>
                    </div>
                </div>
                <div class=""row"">
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Литература</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Музыка</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Образование и наука</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Ремесло</a>
                    </div>
                </div>
                <div class=""row"">
     ");
            WriteLiteral(@"               <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Социальные проекты</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Спорт</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Театр</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Технологии</a>
                    </div>
                </div>
                <div class=""row"">
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Фильмы и Видео</a>
                    </div>
                    <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Фотография</a>
                    </div>
              ");
            WriteLiteral(@"      <div class=""col-lg-3 col-md-6 col-sm-6"">
                        <a class=""category"" href=""#"">Другое</a>
                    </div>
                </div>
                <!-- что такое краудфайндинг + что такое краудинвестинг-->
                <div class=""box"">
                    <div class=""row"">
                        <div class=""col-lg-6"">
                            <div>
                                <h4 class=""title"">Что такое краудфандинг?</h4>
                            </div>
                            <div class=""littleDecorationLine""></div>
                            <p>
                                Краудфандинг (от англ. crowdfunding) — это способ коллективного финансирования проектов,
                                при котором деньги на создание нового продукта поступают от его конечных потребителей.
                                Краудфандинг дает
                                шанс
                                вплотную изучить и расширить аудиторию, узна");
            WriteLiteral(@"ть ее потребности и протестировать идею.
                            </p>
                            <p>
                                Краудфандинг дает возможность поддержать автора проекта, стать сопродюсером нового
                                альбома или фильма,
                                сделать вклад в новое начинание, получая за участие уникальные вознаграждения. А еще
                                можно напрямую
                                общаться с теми людьми, чьи творчество, социальные или бизнес-идеи вам интересны.
                            </p>
                        </div>
                        <div class=""col-lg-6"">
                            <div>
                                <h4 class=""title"">Что такое вознаграждение?</h4>
                            </div>
                            <div class=""littleDecorationLine""></div>
                            <p>
                                Это бонус, предлагаемый автором крауд-кампании в обмен на подде");
            WriteLiteral(@"ржку.
                            </p>
                            <p>
                                Вознаграждения могут быть материальными (например, футболки, диски, реквизит со съемок
                                кино и т.п.)
                                и нематериальными. К последнему типу бонусов относятся: цифровые версии альбомов,
                                приглашения на
                                экскурсии, мастер-классы, встречи с известными людьми и многое другое!
                            </p>
                            <p>
                                Чтобы узнать, какое вознаграждение вы можете получить за поддержку крауд-кампании,
                                перейдите в проект.
                                В правой колонке вы увидите полный список доступных вознаграждений.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
");
            EndContext();
            DefineSection("JsFiles", async() => {
                BeginContext(16144, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(16150, 43, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3cf950eec775b8060224e81d158ec73762b92c0325331", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(16193, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(16199, 42, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3cf950eec775b8060224e81d158ec73762b92c0326589", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(16241, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(16247, 38, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3cf950eec775b8060224e81d158ec73762b92c0327847", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(16285, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(16291, 37, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3cf950eec775b8060224e81d158ec73762b92c0329105", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(16328, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            BeginContext(16333, 2, true);
            WriteLiteral("\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591