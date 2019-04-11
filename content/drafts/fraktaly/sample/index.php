<?php
//==============================================================================================Konfigurace
error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_WARNING );
ini_set("max_execution_time","100000");
define('gr',1.62);//Golden ratio = Zlatý řez

//----------------------Vytvoření složky pro obrázky
mkdir('img');
chmod('img',0777);
//==============================================================================================Generator
function generator($params,$filename=false){
	list($w,$h,$itt,$min_x,$max_x,$min_y,$max_y,$d1,$d2)=$params;
	//$w = šířka
	//$h = výška
	//$itt = počet iterací
	//$min_x = Levý okraj
	//$max_x = Pravý okraj
	//$min_y = Horní okraj
	//$max_y = Dolní okraj
	//$d1 = Jakým číslem se násobí úhel
	//$d2 = Jakým číslem se mocní vzdálenost


	$dim_x=$w;
	$dim_y=$h;

	$im = imagecreatetruecolor($dim_x, $dim_y);
	imagealphablending($im, false);
	imagesavealpha($im, true);

	//----------------------Mandelbrotova množina bude načervenalá, Logo Towns namodralé a ostatní černé
	//if($d1==2 and $d2==2){
	//	$black_color = imagecolorallocate($im, 80, 0, 0);
	//}elseif($d1==5 and $d2==2){
	//	$black_color = imagecolorallocate($im, 0, 0, 80);
	//}else{
		$black_color = imagecolorallocate($im, 0, 0, 0);
	//}
	//----------------------

	$white_color = imagecolorallocate($im, 255, 255, 255);
	$alpha_color = imagecolorallocatealpha($im, 0, 0, 0,127);
	imagefill($im,0,0,$alpha_color);


	//----------------------Procházení a vyhodnocení každého bodu
	for($y=0;$y<=$dim_y;$y++) {
	  for($x=0;$x<=$dim_x;$x++) {
	
		//--------Zjištění souřadnic bodu, který se přičte v každé iteraci
		$c1=$min_x+($max_x-$min_x)/$dim_x*$x;
		$c2=$min_y+($max_y-$min_y)/$dim_y*$y;
		//--------


		$z1=0;//aktuální číslo
		$z2=0;
	 
		//~~~~~~~~~~~~~~~~Iterace
		for($i=0;$i<$itt;$i++) {

		  //Zjištění vzdálenosti od 0+0i
		  $distance=sqrt($z1*$z1+$z2*$z2);


		  if($distance!=0){$angle=acos($z1/$distance);}else{$fi=0;}//Úhel
		  if($z2<0)$angle=(2*pi())-$angle;
		  
		  $angle=$angle*$d1;//Vynásobení úhlu
		  $distance=pow($distance,$d2);//Mocnění vzdálenosti


		  //--------Výpočet nového x,y
		  $z1=cos($angle)*$distance;
		  $z2=sin($angle)*$distance;
		  //--------Přičtení souřadnic bodu			
		  $z1+=$c1;
		  $z2+=$c2;

		  
		  //--------Pokud je bod ve vzdálenosti 2 nebo větší, bod v množině nebude a iterování lze ukončit
		  if($z1*$z1+$z2*$z2>=4) {
		    break;
		  }

		
		}
		//~~~~~~~~~~~~~~~~



		//----------------------Pokud v každé iteraci držel nový bod ve vzdálenosti 2 nebo méně, je původní bod vyplněn.

		if($i>=$itt) {

		  $color=imagecolorallocate($im,$r,$g,$b);
		  imagesetpixel ($im, round($x), round($y), $black_color);
		  
		}

		//----------------------

	  }
	}

	//----------------------Uložení do souboru

	if($filename){
		imagesavealpha($im,true);
		imagepng($im,$filename);
		chmod($filename,0777);
	}


	imagedestroy($im);
}
//==============================================================================================Osy

	$w=300;//šířka
	$h=(2.2/3)*$w;//výška
	$min_x=-2;//Levý okraj
	$max_x=1;//Pravý okraj
	$min_y=($h*($max_x-$min_x)/$w)/-2;//Horní okraj
	$max_y=($h*($max_x-$min_x)/$w)/2;//Dolní okraj
	$itt=18;//Nejlépe mi vychází, když je počet iterací 18


//----------------čísla, kterými se bude násobit uhel
$ax=array();
/*for($x=0;$x<=50;$x++) {
	$d1=pow(($x-(50-(50/gr)))/10,3);
	$ax[]=round($d1,3);
}*/
for($x=-7;$x<=13;$x++) {
	$ax[]=$x;
}
sort($ax);


//----------------čísla, kterými se bude mocnit vzdálenost
$ay=array();
/*for($y=0;$y<=30;$y++) {
	$d2=pow(($y-1)/10,2);
	
	$ay[]=round($d2,3);
}*/
for($y=0;$y<=8;$y++) {
	$ay[]=$y;
}
sort($ay);
//----------------

//----------------Testovací nastavení
//$ax=array(3);
//$ay=array(3);

//==============================================================================================HTML
?>

<!DOCTYPE html>
<html lang="cs" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>Fraktály</title>
  </head>

	<style type="text/css">
        body {
            background-color: #FFFFFF;

        }
        body,td,th {
            color: #000000;
            font-size: 14px;
            font-family: "trebuchet ms";
        }
        h3{
			color: #777777;
            font-size: 20px;
        }
        a:link {
            color: #5555dd;
        }
        a:visited {
            color: #5555dd;
        }
        a:hover {
            color: #5555dd;
        }
        a:active {
            color: #5555dd;
        }
	</style>

	<script type="text/javascript">

	 var _gaq = _gaq || [];
	 _gaq.push(['_setAccount', 'UA-16346522-9']);
	 _gaq.push(['_trackPageview']);

	 (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	 })();

	</script>



  <body>


© <a href="http://www.itnetwork.cz/portfolio/9049" target="_blank">Pavol Hejný</a> | 2013 - 2015 

<table border="0" cellpadding="0" cellpadding="0">
<?php


array_unshift($ax,false);//Popisky os
array_unshift($ay,false);


foreach($ay as $d2) {
	echo('<tr>');
	foreach($ax as $d1) {

		

		if($d1!==false and $d2!==false){
			$params=array($w,$h,$itt,$min_x,$max_x,$min_y,$max_y,$d1,$d2);
			$filename='img/x'.$d1.'y'.$d2.'.png';

			if(!file_exists($filename)){
				generator($params,$filename);
			}

			if($d1*$d2%2){
				$bgcolor='eeeeee';
			}elseif($d1%2){
				$bgcolor='f5f5f5';
			}elseif($d2%2){
				$bgcolor='f5f5f5';
			}else{
				$bgcolor='fbfbfb';
			}


			echo('<td bgcolor="'.$bgcolor.'"><img src="'.$filename.'" border="0"/></td>');

		}elseif($d1===false and $d2!==false){//Zobrazení popisku osy 

			echo('<td valign="middle">');
			if(round($d2)==$d2){
				echo('<h2>^'.$d2.'&nbsp;</h2>');		
			}else{
				echo('^'.$d2.'&nbsp;');
			}
			echo('</td>');

		}elseif($d2===false and $d1!==false){//Zobrazení popisku osy 

			echo('<td align="center">');
			if(round($d1)==$d1){
				echo('<h2>*'.$d1.'</h2>');		
			}else{
				echo('*'.$d1.'');
			}
			echo('</td>');

		}else{ //0,0

			echo('<td>&nbsp;</td>');

		}

	}
	echo('</tr>');
}
echo('</tr>');


?>

</table>
</body>
</html>
