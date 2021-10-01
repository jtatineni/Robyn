"use strict";(self.webpackChunkmmm_for_all=self.webpackChunkmmm_for_all||[]).push([[225],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return r},Z:function(){return i}});var o=n(2263),a=n(3919);function r(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},2309:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(4996),s=["components"],l={id:"outputs-diagnostics",title:"Outputs and diagnostics"},c=void 0,u={unversionedId:"outputs-diagnostics",id:"outputs-diagnostics",isDocsHomePage:!1,title:"Outputs and diagnostics",description:"The MMM code will automatically generate a set of plots under the folder you specify on the \u2018modeloutputcollect\u2019 object. Each of these plots represents one of the optimal model solutions as a result of the multi-objective optimization Pareto optimal process mentioned in the \u2018Automated hyperparameter selection and optimization\u2019 section. Please find below an example of the model output:",source:"@site/docs/outputs-diagnostics.mdx",sourceDirName:".",slug:"/outputs-diagnostics",permalink:"/Robyn/docs/outputs-diagnostics",editUrl:"https://github.com/facebookexperimental/Robyn/docs/outputs-diagnostics.mdx",tags:[],version:"current",frontMatter:{id:"outputs-diagnostics",title:"Outputs and diagnostics"},sidebar:"someSidebar",previous:{title:"Calibration",permalink:"/Robyn/docs/calibration"},next:{title:"Modeling window",permalink:"/Robyn/docs/window"}},d=[],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The MMM code will automatically generate a set of plots under the folder you specify on the \u2018model_output_collect\u2019 object. Each of these plots represents one of the optimal model solutions as a result of the multi-objective optimization Pareto optimal process mentioned in the ",(0,r.kt)("strong",{parentName:"p"},"\u2018Automated hyperparameter selection and optimization\u2019")," section. Please find below an example of the model output:"),(0,r.kt)("img",{alt:"ModelResults1 chart",src:(0,i.Z)("/img/ModelResults1.png")}),(0,r.kt)("p",null,"As you may observe we have 6 different charts above:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response decomposition waterfall by predictor:")," This chart reflects the percentage of each of the variables effect (Baseline and Media variables + intercept) on the response variable. E.g. If season effect says it's 40.5% that means that 40.5% of the total sales can be attributed to seasonality."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Share of spend vs. share of effect:")," This plot reflects the comparison of the total effect each channel had by means of the decomposition of the coefficients into the response variable divided by the total effect. As well as, the total spend (cost or investment) each channel had and its relative share over total marketing spend. We also plot the return on investment (ROI) each channel had which can give you an idea over the most profitable channels."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Average adstock decay rate:")," This chart represents, on average, what is the percentage decay rate each channel had. The higher the decay rate, the longer the effect in time for that specific channel media exposure."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Actual vs. predicted response:")," This plot shows the actual data for the response variable E.g sales, and how the modeled predicted data for that response variable is capturing the real curve. We aim for models that can capture most of the variance from the actual data and therefore the R-squared is closer to 1 while NRMSE is low."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response curves and mean spend by channel:")," These are the diminishing returns response curves from hill function. They represent how saturated a channel is and therefore, may suggest potential budget reallocation strategies. The faster the curves reach to an inflection point and to a horizontal/flat slope, the quicker they will saturate with each extra ($) spent."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Fitted vs. residual:")," This chart shows the relationship between fitted and residual values. A residual value is a measure of how much a regression line vertically misses a data point.  A residual plot is typically used to find problems with a regression. Some data sets are not good candidates for regression, such as points at widely varying distances from the line. If the points in a residual plot are randomly dispersed around the horizontal axis, a linear regression model is appropriate for the data; otherwise, a nonlinear model is more appropriate.")),(0,r.kt)("p",null,"Once you have analyzed the optimal model results plots and have chosen your model, you may introduce the model unique ID from the results in the previous section. E.g setting modID = \"1_22_3\" could be an example of a selected model from the list of best models in 'model_output_collect$allSolutions' results object. Once you run the budget allocator, results will be plotted and saved under the same folder where the model plots had been saved. The result would look like the following:"),(0,r.kt)("img",{alt:"budget allocator chart",src:(0,i.Z)("/img/budgerAllocator1.png")}),(0,r.kt)("p",null,"You may encounter three charts as in the example above:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initial vs. optimized budget allocation:")," This channel shows the original spend share vs. the new optimized recommended one. If optimized share is greater than original, this would mean you will need to proportionally increase budgets for that channel according to the difference between both shares. And you would reduce budgets in the case spend share would be greater than optimized share."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initial vs. optimized mean response:")," Similar to the chart above, we have initial and optimized shares, but this time over the total expected response E.g. Sales. The optimized response is the total increase in sales that we are expecting you to have if you switch budgets following the chart we explained above, increasing those with better share for optimized spend and decreasing spend for those with lower optimized spend than the initial."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Response curve and mean spend by channel:")," These again are the diminishing returns response curves from hill function. They represent how saturated a channel is and therefore, may suggest potential budget reallocation strategies. The faster the curves reach to an inflection point and to a horizontal/flat slope, the quicker they will saturate with each extra ($) spent. The initial mean spend is represented by a circle and the optimized one by the triangle.")))}h.isMDXComponent=!0}}]);