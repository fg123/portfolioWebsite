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
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Felix Guo</title>

		<!-- Bootstrap -->
		<link href="bootstrap.css" rel="stylesheet">
		
		<!--Google Font Links-->
		<link href='//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600,400' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Play' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Roboto+Slab' rel='stylesheet' type='text/css'>
		<link href='//fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">
		<link rel="icon" type="image/png" href="images/icon.png">
	
		<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
		
		<script src="//code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>
		<script type="text/javascript" src="pageload.js"></script>
		<link rel="stylesheet" href="main.css?v=124" type="text/css">

	</head>
	<body>
	 	<div class="mainContainer">
			<div class="topbar">
				<div class="navigation">
					<table style="width:100%">
						<tr>
							<td style="text-align:center;">
								<a href="#about" class="navigationButton" onclick="clickIt('.about')"> About </a> 
							</td>
							<td style="width: 450px">
								<div class="name">
									<a href="#portfolio" class="logo" onclick="clickIt('.portfolio')">FELIX GUO</a>
								</div>
								<div class="subnote">
									<i>Web Designer | Graphics Designer | Programmer</i><br>
									<i>C#, Java, HTML, CSS, PHP, MYSQL, Javascript</i>
								</div>
							</td>
							<td style="text-align:center;">
								<a href="#contact" class="navigationButton" onclick="clickIt('.contact')"> Contact </a>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="mainContent about" style="background-color: #FFF">
				<h1><span>About Me</span></h1>
				<table style="width:1000px">
					<tr>
						<td style="width: 600px; padding-left: 50px" valign="top">
							<h3 style="font-family: 'Roboto Slab'">I was born in China, and currently live and go to school in Vancouver, BC Canada.</h3>
							My hobbies include procrastinating on Reddit, playing League of Legends, doing bad card tricks, playing various instruments and of course programming.<br><br>
							<h3 style="font-family: 'Roboto Slab'">Web Design</h3>
							<table style="width:auto" class="skillDisplay">
								<tr>
									<td><a href="http://en.wikipedia.org/wiki/HTML5"><img src="images/icon/html5.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/CSS3"><img src="images/icon/css3.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Javascript"><img src="images/icon/js.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/JQuery"><img src="images/icon/jquery.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"><img src="images/icon/bootstrap.png"></a></td>
								</tr>
								<tr>
									<td><b><a href="http://en.wikipedia.org/wiki/HTML5">HTML5</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/CSS3">CSS3</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Javascript">Javascript</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/JQuery">Jquery</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">Bootstrap</a></b></td>
								</tr>
							</table><br>
							I look towards designing beautiful and intuitive websites for businesses and organizations that are easy to navigate and display important information for visitors. Modern technologies like HTML5 and CSS3 for UI design and layout organization, Javascript and jQuery for stunning effects and fluid transitions, and Bootstrap for grid and mobile layouts. 

							<h3 style="font-family: 'Roboto Slab'">Web Backend</h3>
							<table style="width:auto" class="skillDisplay">
								<tr>
									<td><a href="http://en.wikipedia.org/wiki/PHP"><img src="images/icon/php.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/MySQL"><img src="images/icon/mysql.png"></a></td>
								</tr>
								<tr>
									<td><b><a href="http://en.wikipedia.org/wiki/PHP">PHP</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/MySQL">MySQL</a></b></td>
								</tr>
							</table>
							Using the server-side PHP and MySQL to manage databases allows for user-specific interactive websites. I employ PHP and MySQL for tools like forums, blogs, contact forms (like the one on this website!) and user management systems. PHP and MySQL are both very flexible and easy to integrate for any type of website. 

							<h3 style="font-family: 'Roboto Slab'">Game Design</h3>
							<table style="width:auto" class="skillDisplay">
								<tr>
									<td><a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)"><img src="images/icon/csharp.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/.NET_Framework"><img src="images/icon/dotnet.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Microsoft_XNA"><img src="images/icon/xna.png"></a></td>
									<td><a href="http://en.wikipedia.org/wiki/Unity_(game_engine)"><img src="images/icon/unity.png"></a></td>
								</tr>
								<tr>
									<td><b><a href="http://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/.NET_Framework">.NET</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Microsoft_XNA">XNA</a></b></td>
									<td><b><a href="http://en.wikipedia.org/wiki/Unity_(game_engine)">Unity3D</a></b></td>
								</tr>
							</table>
							I also do some game design using XNA and C# as my primary setup. XNA allows me to use many built in game structures so I can focus primarily on designing game play instead of focusing on basic functions like drawing sprites and calculating vectors. I am also proficient in using Unity3D to create 2D games for Android. 
						</td>
						<td style="width: 400px;padding-top:20px" valign="top">
							<div>
								<img class="imagesBlocks imagesBlocksUnset" src="images/felixGuo2.jpg">
							</div>
						</td>
					</tr>
				</table>
				
			</div>
			<div class="mainContent contact" style="background-color: #FFF;">
				<h1><span>Contact Me</span></h1>
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
			<div class="mainContent portfolio" style="background-color: #FFF">
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
			<div class="fewter">
				&copy; Copyright Felix Guo 2015
			</div>
		</div>
		
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>		
	</body>
</html>
