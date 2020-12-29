<template>
  <!-- <div class="error"> -->
		<!-- <header>
			<a href="http://hakim.se/experiments/404">About this experiment</a>
			
			<a href="https://github.com/hakimel/404">Fork on GitHub</a>
			
			<div class="facebook-button">
				<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fhakim.se%2Fexperiments%2Fhtml5%2F404&amp;layout=button_count&amp;show_faces=false&amp;width=90&amp;action=like&amp;font=arial&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px; height:21px;" allowTransparency="true"></iframe>
			</div>
			
			<div class="tweet-button">
				<a href="http://twitter.com/share" class="twitter-share-button" data-text="A creepy 404 page created by @hakimel." data-url="http://hakim.se/experiments/html5/404" data-count="horizontal" data-related="hakimel"><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></a>
			</div>
		</header> -->
    <div id="fof">
      <!-- <div></div> -->
	  <canvas></canvas>
	  <div class="notfoundText">
		<!-- <a href="">来错地方了？点我返回</a> -->
	  </div>
	</div>
  <!-- </div> -->
</template>

<script>
import {xxx} from '@/../static/js/404.js'
export default {
	
	data(){
		return {
			// circle: true,
		}
	},
	created(){
		// console.log(localStorage.getItem("reloadState"));
		// location.reload()
		if (localStorage.getItem("reloadState")) {
			console.log(localStorage.getItem("reloadState"))
			console.log('why')
			localStorage.setItem("reloadState", '');
		} else{
			console.log('刷新了一次')
			localStorage.setItem("reloadState", true);
			console.log(localStorage.getItem("reloadState")+ '=====else')
			location.reload();
		}
	},
	methods:{
		dosomething(){	
		//   location.reload()
	  }
	},
	mounted () {
		// this.timer = setTimeout(() => {
			this.timer2 = setInterval(() => {
		  this.$notify.error({
		  title: '错误',
		  dangerouslyUseHTMLString: true,
          message: '<p style="color: red;">页面找不到了，点 <a href="/" style="font-weight: 400; font-size: 1.4rem; color: red;"><i>我</i></a> 返回</p>'
		 });
		this.$notify.error({
          title: '错误',
		  dangerouslyUseHTMLString: true,
          message: '<p style="color: red;">页面找不到了，点 <a href="/" style="font-weight: 400; font-size: 1.4rem; color: red; "><i>我</i></a> 返回</p>',
          position: 'bottom-left'
		});  
		}, 100)
		
	    // }, 5000)
	},
	beforeCreate() {
	  document.querySelector('body').setAttribute('style', 'background: black')
	},
	// destroyed() {
	// 	clearInterval(this.timer)
	// },
	beforeDestroy() {
		clearInterval(this.timer2)
		// clearInterval(this.timer)
		// localStorage.setItem("reloadState", false)
		// console.log(localStorage.getItem("reloadState"))
		document.querySelector('body').removeAttribute('style')
	}

}

</script>

<style scoped>


/* ------------------ main.css —————————————— */
/**
 * @author Hakim El Hattab
 */


/*********************************************
 * GLOBAL STYLES
 *********************************************/

/* html, body {
	width: 100%;
	height: 100%;
	overflow: hidden;
	
	background: #eee;
	color: #eee;
	
	font-family: 'Molengo', Arial, Helvetica, sans-serif;
} */
.notfoundText {
	color: white;
}

/*********************************************
 * EXPERIMENTS HEADER
 *********************************************/

a {
	color: rgb(220,200,150);
}

header {
	padding: 10px 0;
	z-index: 999;
	
	height: 20px;
	width: 100%;
	
	background: rgba(0,0,0,0.7);
	background: rgba(31, 30, 30, 0.7);
}

header>div {
	float: right;
	margin-right: 10px;
}

header div.facebook-button {
	top: 1px;
}

header a {
	float: left;
	font-size: 14px;
	color: #eee;
	margin-left: 10px;
}

/*********************************************
 * CONTENTS
 *********************************************/

#fof {
	margin-top: 40px;
	text-align: center;
}





#fof {
	margin: 20px 0 120px;
	text-align: center;
}

#fof div {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	
	background: #000;
}

#fof canvas,
#fof img {
	position: relative;
	width: 960px;
	height: 480px;
	margin-bottom: 20px;
	z-index: 1;
	
	background: #000;
}



/* --------- reset.css  --------- */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* HTML5BP:
   These selection declarations have to be separate.
   No text-shadow: twitter.com/miketaylr/status/12228805301
   Also: hot pink. */
::-moz-selection{ background: #FF5E99; color:#fff; text-shadow: none; }
::selection { background:#FF5E99; color:#fff; text-shadow: none; }


</style>