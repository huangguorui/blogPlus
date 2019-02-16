	<style type="text/css" scoped>
		*{
			margin:0;
			padding:0;
		}
		#rotate{
			position:relative;
			width:854px;
			height:504px;
			background:#D71F2E url("images/bg1.png");
			margin:50px auto; 
		}
		.rotateArrow{
			position:absolute;
			left:181px;
			top:104px;
			width:294px;
			height:294px;
			background:url("images/arrow.png");
		}
		.list{
			position:absolute;
			right: 29px;
			top: 139px;
			width: 140px;
			height: 330px;
			overflow:hidden;
		}
		.list ul{
			position:relative;
			top:0;
		}
		.list ul li{
			list-style:none;
			height:37px;
			line-height:37px;
			color:#ffcc33;
			background:url("images/user.png") no-repeat;
			background-position:0px 12px;
			text-indent:25px;
		}
		.result{
			position:absolute;
			left: 130px;
			top: 190px;
			width:400px;
			height:120px;
			background:rgba(0,0,0,0.7);
			display:none;
		}
		.result a{
			position:absolute;
			right: 0px;
			top: 0px;
			width:24px;
			height:24px;
			background:url("./images/close.png");
		}
		.result p{
			color:#fff;
			text-align:center;
			line-height:120px;
		}
	</style>

<template>
	<div id="rotate">
		<div class="rotateArrow"></div>
		<div class="list">
			<ul>
				<li>1569****851</li>
				<li>1515****206</li>
				<li>1550****789</li>
				<li>1370****627</li>
				<li>1828****215</li>
				<li>1589****572</li>
				<li>1583****825</li>
				<li>1396****805</li>
				<li>1332****261</li>
				<li>1884****863</li>
				<li>1384****955</li>
				<li>1897****137</li>
				<li>1342****973</li>
				<li>1558****071</li>
				<li>1554****168</li>
				<li>1562****018</li>
				<li>1805****856</li>
				<li>1354****809</li>
				<li>1383****364</li>
			</ul>
		</div>
		<div class="result">
			<p>恭喜你中奖了</p>
			<!--javascript:; 阻止a标签默认跳转-->
			<a href="javascript:;" id="btn"></a>
		</div>
	</div>
	<!-- <audio id="music" src="mp3/1.mp3"></audio> -->



</template>
	<script type="text/javascript">
import $ from 'jquery'
		var $this;
		let flag =true;
		var $music = $("#music");
		$(".rotateArrow").click(function(){
			console.log(flag,flag)
			if(flag!=true){
				return false;
			}
			flag=false;
			$this = $(this);
			$music.get(0).pause();
			$music.get(0).src = "mp3/1.mp3";
			$music.get(0).play();//播放音乐
			var data = [0,1,2,3,4,5,6,7];
			var m = data[Math.floor(Math.random()*data.length)];
			switch (m)
			{
			case 1: 
				rotateFun(1,90,'恭喜你获得了1元代金劵');
				break;
			case 2: 
				rotateFun(2,45,'恭喜你获得了5元代金劵');
				break;
			case 3: 
				rotateFun(3,135,'恭喜你获得了10元代金劵');
				break;
			case 4: 
				rotateFun(4,180,'很遗憾你没有抽中奖励');
				break;
			case 5: 
				rotateFun(5,180,'很遗憾你没有抽中奖励');
				break;
			case 6:
				rotateFun(6,180,'很遗憾你没有抽中奖励');
				break;
			case 7: 
				rotateFun(7,270,'恭喜你获得了50元代金劵');
				break;
			default:
				rotateFun(0,0,'很遗憾你没有抽中奖励');
			}

		});
		function rotateFun(dir,angle,txt){
			//Math.floor(向下取整)
			//Math.random()随机生成一个0-1之间的数
			var n = Math.floor(Math.random()*5)+1;
			$this.rotate({//插件提供的旋转方法
				angle: 0,//初始位置
				duration: 5000,//动画过渡
				animateTo: angle + 1440*n,//angle随机角度 1440是至少旋转4圈
				callback: function(){//旋转完成的回调函数
					$(".result").show();
					$(".result p").html(txt);
					$music.get(0).pause();//停止音乐
					$music.get(0).src = "mp3/2.wav";
					$music.get(0).play();//播放音乐
					console.log('当前的度数',angle)
				}
			});
		}
		$("#btn").click(function(){
			$(".result").hide();
			flag=true;
		});

		//数据向上无缝滚动
		setInterval(function(){
			$(".list ul").animate({"top":"-37px"},500,function(){
				//append()是在内容的最后面添加节点
				$(this).append($(".list ul li:first"));//把ul里面的第一个li添加到最后面去
				$(this).css("top","0px");
			});	
		},1000);
	</script>
<script>
export default {
  name: 'trueTable',
  data () {
    return {

    }
  }
}
</script>

