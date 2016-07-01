<?php
	if(isset($_POST['legit']))
	{
		$to = "felixguoxiuping@gmail.com"; // this is your Email address
	    $from = "contact@felixguo.tk"; // this is the sender's Email address
	    $first_name = $_POST['name'];
	    $subject = "Contact Form Submission";
	    $message = $first_name . " wrote the following (".$_POST['email']."):" . "\n\n" . $_POST['message'];

	    $headers = "From:" . $from;
	    $headers2 = "To:" . $to;
	    mail($to, $subject, $message, $headers);
	    header("Location: index.php?success=1#contact");
	}
?>
<!--
Author: Felix Guo
Copyright Felix Guo 2015
Linda is Bae
-->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Felix Guo | Freelance Programmer</title>

		<!-- Bootstrap -->
		<link href="include/bootstrap.css" rel="stylesheet">
		
		<!--Google Font Links-->
		<link href='//fonts.googleapis.com/css?family=Lato:100,300,400,700,900,400italic' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Cabin|Arimo|Raleway|Lobster|Play|Oswald|Roboto|Signika|Lato|Varela+Round|Roboto+Slab|Pacifico' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600,400' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="include/jquery-ui.css">
		<!--<link rel="stylesheet" href="include/animate.css"> breaks layout of the page, will implement later-->
		<link rel="icon" type="image/png" href="images/icon.png">
	
		<script src="include/jquery-1.11.2.min.js"></script>
		
		<script src="include/jquery-ui.min.js"></script>
		<link rel="stylesheet" href="main.css" type="text/css">
		
	</head>
	<body>
	 	
		<div class="topbar">
			<div class="navigation">
				<table style="width:100%">
					<tr>
						<td style="width: 100%;"><!--colspan="3"-->
							<div class="name">
								Hi, I'm <span class="logo">Felix Guo</span>.
							</div>
							<hr style="width: 250px">
							<div class="subnote">
								I program computer things.
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="outerContainer">
			<div class="mainContainer">
				<div class="mainContent about">
					<table style="width:100%;">
						<tr>
							<td style="width:20%">
								<img src="images/portrait2.png" class="img-circle" style="height:200px">
							</td>
							<td style="width:10%"></td>
							<td style="width:70%;vertical-align:center">
								I'm currently in my final year of highschool at Pinetree Secondary. Creating is my passion, and I love creating websites, games, and digital media. Outside of programming, I love to woodwork and play music in my spare time.
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div style="margin-top:50px;width:100%;background-color:#EEE;padding-top:30px;padding-bottom:30px">
				<div class="mainContainer">
					<table style="width:100%;">
						<tr>
							<td style="width:50%;vertical-align:top">
								I can design beautiful and intuitive websites for businesses and organizations that are easy to navigate and display important information for visitors by using the latest web technology such as HTML5 and CSS3.  
							</td>
							<td style="width:50%;vertical-align:top">
								I can also create desktop games using XNA and C# as well as using Unity3D to create both 3D or 2D games for mobile platforms.
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="mainContainer">
				<h3 class="name" style="text-align:center;color:#333;font-size:32px;margin-bottom:-10px">What I Know</h3>
				<table style="width:100%;">
					<tr>
						<td colspan="2">
							<table style="width:100%;margin-top:50px;text-align:center" class="skillDisplay">
								<tr>
									<td><a href="http://en.wikipedia.org/wiki/HTML5"><img src="images/icon/html5.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/CSS3"><img src="images/icon/css3.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Javascript"><img src="images/icon/js.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/JQuery"><img src="images/icon/jquery.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"><img src="images/icon/bootstrap.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/PHP"><img src="images/icon/php.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/MySQL"><img src="images/icon/mysql.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)"><img src="images/icon/csharp.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/.NET_Framework"><img src="images/icon/dotnet.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Microsoft_XNA"><img src="images/icon/xna.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Unity_(game_engine)"><img src="images/icon/unity.png"></a></td>
								</tr>
								<tr>
									<td><b><a href="http://en.wikipedia.org/wiki/HTML5">HTML5</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/CSS3">CSS3</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Javascript">Javascript</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/JQuery">Jquery</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">Bootstrap</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/PHP">PHP</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/MySQL">MySQL</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/.NET_Framework">.NET</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Microsoft_XNA">XNA</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Unity_(game_engine)">Unity3D</a></b></td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
<!--			<div class="workspaceImage" style="margin-top:50px"></div>-->
			
			<div style="margin-top:50px;width:100%;background-color:#EEE;padding-top:30px;padding-bottom:30px">
				<h3 class="name" style="text-align:center;color:#333;font-size:32px">Portfolio</h3>
			</div>
			<!--Span to Contain Description, B to contain title for styling purposes-->
			<div class="portfolioBack">
				<div class="portfolioSquare s1">
					<a href="http://wishyouthnetwork.org/">
						<p>
							<b>Wish Youth Network Society</b>
							<span>Non Profit: Website Designer</span>
						</p>
					</a>
				</div>
				<div class="portfolioSquare s2">
					<a href="http://pinetreepost.com/">
						<p>
							<b>The Pinetree Post</b>
							<span>School Newspaper: President, Technical Manager</span>
						</p>
					</a>
				</div>
				<div class="portfolioSquare s3">
					<a href="http://play.google.com/store/apps/details?id=ca.inkpadstudios.pedalpanic">
						<p>
							<b>Pedal Panic</b>
							<span>Mobile Game: Lead Game Developer</span>
						</p>
					</a>
				</div>
				<div class="portfolioSquare s4">
					<a href="http://techwiqdev.aws.af.cm/">
						<p>
							<b>Techwiq</b>
							<span>Business: Lead Website Designer</span>
						</p>
					</a>
				</div>
				<div class="portfolioSquare s5">
					<a href="http://www.assembla.com/spaces/lumen-astrum/subversion/source">
						<p>
							<b>Lumen Astrum</b>
							<span>WIP Game: Developer</span>
						</p>
					</a>
				</div>
				<div class="portfolioSquare s6">
					<a href="https://play.google.com/store/apps/details?id=com.falexthepotato.todo">
						<p>
							<b>To-Do List</b>
							<span>Android App: Lead Developer</span>
						</p>
					</a>
				</div>
				<div class="portfolioSquare s7">
					<a href="http://comeplayforme.com/">
						<p>
							<b>Come Play For Me</b>
							<span>Music Studio: Website Designer</span>
						</p>
					</a>
				</div>
				<!--<div class="portfolioSquare s7" style="background-color:yellow"></div>
				<div class="portfolioSquare s8" style="background-color:grey"></div>
				<div class="portfolioSquare s9" style="background-color:turquoise"></div>
				<div class="portfolioSquare s10" style="background-color:aqua"></div>-->
			</div>
			<div style="width:100%;background-color:#EEE;padding-top:30px;padding-bottom:30px">
				<h3 class="name" style="text-align:center;color:#333;font-size:32px">Interested? Contact me below!</h3>
			</div>
			<div class="mainContainer">
				<div class="mainContent contact" style="padding-top:50px;padding-bottom:100px">
					
					<?php if(isset($_GET['success']))
						{
							echo '<div class="alert alert-success" role="alert" style="margin-left:100px; margin-right:100px">Thank you for sending a message! I will get back to you as soon as I can!</div>';
						}
						else 
						{
							echo ' <form action="index.php" method="post" style="margin-left:100px; margin-right:100px">
							<div class="form-group">
								Name: <input type="text" name="name" class="form-control" id="name" placeholder="Enter Name" required>
						  	</div>
						  	<div class="form-group">
							Email: <input type="text" name="email" class="form-control" id="email" placeholder="Enter Email" required>
						  	</div>
						  
						  <div class="form-group">
							Message: <textarea name="message" class="form-control" rows="3" placeholder="Enter Message" required></textarea>
						  </div>
						  <input type="hidden" name="legit" value="yes">
						  <button type="submit" class="btn btn-success">Send</button>
						  <input type="reset" class="btn btn-default" value="Reset" id="value">
                    		</form>';
						}
                   	?><br>
                   	<div style="margin-left:100px; margin-right:100px">
						I can also be contacted through email: <a href="mailto:contact@felixguo.tk">contact@felixguo.tk</a> or by shooting me a message at <a href="https://www.facebook.com/falexthepotato">Facebook</a>.
					</div>
				</div>
			</div>
			<div class="city">
				<div class="patternWrap">
					<div class="name" style="margin-top:0px;padding-top:200px">
						I live in the beautiful <span class="logo">Vancouver</span>.
					</div>
					<div class="subnote">
						
					</div>
				</div>
			</div>
			<div class="mainContainer">
				<!--<div class="mainContent portfolio" style="background-color: #FFF">
					<h1><span>Portfolio</span></h1>
					<table style="width: 100%">
						<tr>
							<td class="portfolioBig">
								<img class="imagesBlocks" src="images/wyns.png" id="hoverShowContent">
								<div class="portfolioDescription imagesBlocks">
									<span>
										<h2>Wish Youth Network Society</h2>
										<div class="portfolioDescriptionSub">
											<i><a href="http://wishyouthnetwork.org/">http://wishyouthnetwork.org/</a> | Lead Web Designer</i><br>
										</div>
										<div class="portfolioDescriptionContent">
											Wish Youth Network Society (WYNS) is a student based, non- profit organization to reach out to seriously-ill children and their families. Our mandate is to strengthen and promote the power of hope in those who need it most. WYNS provides an opportunity for students to give back to the community and to connect with like minded youths through joint fundraisers and events.
										</div>
										<div class="portfolioDescriptionSub">
											Technologies Used: HTML5, PHP, CSS, Javascript, Bootstrap, MySQL
										</div>
									</span>
								</div>
							</td>
							<td class="portfolioBig">
								<img class="imagesBlocks" src="images/ptpost.png" id="hoverShowContent">
								<div class="portfolioDescription imagesBlocks">
									<span>
										<h2>Pinetree Post</h2>
										<div class="portfolioDescriptionSub">
											<i><a href="http://www.pinetreepost.com/">http://www.pinetreepost.com/</a> | <a href="http://static1.squarespace.com/static/542cc7a8e4b0747dc3301b59/t/553e7552e4b0ae3f5326176a/1430156626748/April2015.pdf">Latest Copy</a> | Chief Designer</i><br>
										</div>
										<div class="portfolioDescriptionContent">
											Pinetree Post is a monthly newspaper for my school, created to detail the upcoming events as well as cover some previous events. We aim to write easy-to-read articles that are appealing and entertaining. 
										</div>
										<div class="portfolioDescriptionSub">
											Technologies Used: GIMP, InDesign
										</div>
									</div>
								</span>
							</td>
						</tr>
						<tr class="spacer"><td colspan="2"></td></tr>
						<tr>
							<td class="portfolioBig">
								<img class="imagesBlocks" src="images/pedalPanic.png" id="hoverShowContent">
								<div class="portfolioDescription imagesBlocks">
									<span>
										<h2>Pedal Panic: Sky Dash Run</h2>
										<div class="portfolioDescriptionSub">
											<i><a href="https://play.google.com/store/apps/details?id=ca.inkpadstudios.pedalpanic">Google Play Link</a> | Lead Developer</i><br>
										</div>
										<div class="portfolioDescriptionContent">
											Pedal Panic is a quirky take at a basic concept. The player must control the character on a unicycle high above the skies by tilting the phone to keep the character on the planks. As the time goes on, the game accelerates and a variety of obstables and beams are presented to the player that they must overcome. <br><b>Created with <a href="http://www.inkpadstudios.ca/">Inkpad Studios</a></b>
										</div>
										<div class="portfolioDescriptionSub">
											Technologies Used: Visual Studio, C#, Unity 3D
										</div>
									</span>
								</div>
							</td>
							<td class="portfolioBig">
								<img class="imagesBlocks" src="images/techwiq.png" id="hoverShowContent">
								<div class="portfolioDescription imagesBlocks">
									<span>
										<h2>Techwiq</h2>
										<div class="portfolioDescriptionSub">
											<i><a href="http://www.techwiq.com/">http://www.techwiq.com/</a> | Web Developer</i><br>
										</div>
										<div class="portfolioDescriptionContent">
											Techwiq is a new service whose purpose is to provide our customers with accurate information about technology. We'll find the products best suited to your specific needs and make clear their pros and cons in a way that anyone can understand. Techwiq makes technology simple.
										</div>
										<div class="portfolioDescriptionSub">
											Technologies Used: HTML5, PHP, CSS, Javascript, MySQL, AppFog
										</div>
									</span>
								</div>
							</td>
						</tr>
						<tr class="spacer"><td colspan="2"></td></tr>
						<tr>						
							<td class="portfolioBig">
								<img class="imagesBlocks" src="images/lumen.png" id="hoverShowContent">
								<div class="portfolioDescription imagesBlocks">
									<span>
										<h2>Lumen Astrum</h2>
										<div class="portfolioDescriptionSub">
											<i>Work in Progress | Lead Developer</i><br>
										</div>
										<div class="portfolioDescriptionContent">
											Lumen Astrum is a turn-based real-time strategy game where you control your units to battle against an enemy. Defend your command center by building structures to create units and upgrade stats. Currently a work in progress.
										</div>
										<div class="portfolioDescriptionSub">
											Technologies Used: Visual Studio, C#, XNA Game Engine
										</div>
									</span>
								</div>
							</td>
							<td class="portfolioBig">
								<img class="imagesBlocks" src="images/todo.png" id="hoverShowContent">
								<div class="portfolioDescription imagesBlocks">
									<span>
										<h2>To-Do List</h2>
										<div class="portfolioDescriptionSub">
											<i><a href="https://play.google.com/store/apps/details?id=com.falexthepotato.todo">Google Play Link</a> | Developer</i><br>
										</div>
										<div class="portfolioDescriptionContent">
											Little To-Do app. Each added item in the app will create a notification icon that stays there until you clear it from the app itself. Guarenteed to remind you if you constantly see items in the notification list. 
										</div>
										<div class="portfolioDescriptionSub">
											Technologies Used: Eclipse, Java
										</div>
									</span>
								</div>
							</td>
						</tr>
					</table>
					
				</div>
			</div>-->
			<div class="fewter">
				&copy; Copyright Felix Guo 2016
			</div>
		</div>

		<script src="include/bootstrap.min.js"></script>		
		<script type="text/javascript">
		/*$(document).ready(function() {

			if(window.innerHeight > 500 && window.innerHeight < 695)
			{
				$("div.topbar").css("height", window.innerHeight);
				$("div.name").css("margin-top", window.innerHeight / 2);	
			}
			else if(window.innerHeight > 695)
			{
				$("div.topbar").css("height", 695);
				$("div.name").css("margin-top", 347.5);		
			}
			else
			{
				$("div.topbar").css("height", 500);
				$("div.name").css("margin-top", 250);	
			}
			
			});*/
		</script>
	</body>
</html>
