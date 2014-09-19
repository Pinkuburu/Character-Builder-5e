
//When DOM is ready
$(document).ready(function(){

  
 //Sortable tutorial 
 //http://stackoverflow.com/questions/5131460/using-jqueryui-sortable-list-with-forms

 //Starting globals
  var weapon_prof = [];
  var skill_prof = [];
  var race_features = [];
  var class_features = [];
  var race_selection = "";
 

  //Reset stats 
  //Need to run on all main classes to clear bonuses from previous selections
  function resetStats(){
    var bonus_str = 0;
    var bonus_int = 0;
    var bonus_wis = 0;
    var bonus_cha = 0;
    var bonus_dex = 0;
    var bonus_con = 0;
    var bonus_hp = 0;
    $("input#ch_race_armor_prof").val([]);
    $("input#ch_race_skill_prof").val("");
    $("input#ch_race_weapon_prof").val([]);
    $("input#ch_race_langcount").val(0);
    $(".tool_click").attr('checked',false);
  }
  resetStats();
  
  
//Human racial  
$("#panel_hum").click(function(event){
  resetStats();
  event.preventDefault();
  race_selection = "hum";
  $("input#ch_race_langcount").val(1);
  bonus_str = 1;
  bonus_int = 1;
  bonus_wis = 1;
  bonus_cha = 1;
  bonus_dex = 1;
  bonus_con = 1;
  bonus_hp = 1;
  $("input#ch_race_languages").val("Common");
  $("input#ch_size").val("Medium");
  $("input#ch_speed").val("30 ft.");
});
  

//Dwarf racial preloads
$("#panel_dwa").click(function(event){
  resetStats();
  event.preventDefault();
  race_selection = "dwa";
  bonus_con = 2;
  $("input#ch_race_languages").val("Common & Dwarvish");
  $("input#ch_size").val("Medium");
  $("input#ch_speed").val("25 ft. (Not reduced by heavy armor.)");
  $("input#ch_race_weapon_prof").val(["battleaxe","handaxe","throwing hammer","warhammer"]);
});
  
//Mountain Dwarf
$("#dwarf_desc").on("click","#panel_mdwa", function(){
  race_selection = "mdwa";
  resetStats();
  bonus_str = 2;
  bonus_con = 2;
  $("input#ch_race_armor_prof").val(["light","medium"]);
  //Add features for dwarf and mdwarf
  race_features = [];
  $(".feature_dwa").each(function(  ) {
    race_features.push( $(this).text());
  });
  $(".feature_"+ race_selection ).each(function(  ) {
    race_features.push( $(this).text());
  });
  $("input#ch_race_features").val(race_features); 
});

//Hill Dwarf
$("#dwarf_desc").on("click","#panel_hdwa", function(){
  race_selection = "hdwa";
  resetStats();
  bonus_wis = 1;
  bonus_con = 2;
  bonus_hp = 1;
  $("input#ch_race_armor_prof").val(["light","medium"]);
  //Add features for dwarf and mdwarf
  race_features = [];
  $(".feature_dwa").each(function(  ) {
    race_features.push( $(this).text());
  });
  $(".feature_"+ race_selection ).each(function(  ) {
    race_features.push( $(this).text());
  });
  //Note to add 1 each level
  race_features.push("Dwarven Toughness. Your maximum HP increased by 1 each level.")
  $("input#ch_race_features").val(race_features); 
});
  

//Elf racial preloads
$("#panel_elf").click(function(event){
  resetStats();
  event.preventDefault();
  race_selection = "elf";
  
  bonus_int = 1;
  $("input#ch_race_languages").val("Common & Elvish");
  $("input#ch_size").val("Medium");
  $("input#ch_speed").val("30 ft.");
  $("input#ch_race_skill_prof").val("Perception");
  
});

//High Elf
$("#elf_desc").on("click","#panel_helf", function(){
  resetStats();
  race_selection = "helf";
  $("input#ch_race").val("Elf (High Elf)");
  //Helf gets 1 extra language & 2 int
  $("input#ch_race_langcount").val(1);
  bonus_int = 3;
  //Helf weapon prof
  $("input#ch_race_weapon_prof").val(["longsword", "shortsword", "shortbow", "longbow"]);
  //Adds features for elf and helf
  race_features = [];
  $(".feature_elf").each(function(  ) {
   race_features.push( $(this).text());
  });
  $(".feature_"+ race_selection ).each(function(  ) {
   race_features.push( $(this).text());
  });
  $("input#ch_race_features").val(race_features); 
  //Helf no speed increase
  $("input#ch_speed").val("30 ft.");
}); 

//Wood Elf
$("#elf_desc").on("click","#panel_welf", function(){
  resetStats();
  race_selection = "welf";
  $("input#ch_race").val("Elf (Wood Elf)");
  //Welf gets +1 wis
  bonus_wis = 1;
  bonus_int = 2;
  //Welf speed increase
  $("input#ch_speed").val("35 ft.");
  //Welf weapon prof
  $("input#ch_race_weapon_prof").val(["longsword", "shortsword", "shortbow", "longbow"]);
  //Adds features for elf and helf
  race_features = [];
  $(".feature_elf").each(function(  ) {
   race_features.push( $(this).text());
  });
  $(".feature_"+ race_selection ).each(function(  ) {
   race_features.push( $(this).text());
  });
  $("input#ch_race_features").val(race_features); 
}); 
  
//Dark Elf
$("#elf_desc").on("click","#panel_delf", function(){
  resetStats();
  race_selection = "delf";
  $("input#ch_race").val("Elf (Dark Elf)");
  //Delf gets +1 wis
  bonus_int = 1;
  bonus_cha = 1;
  //Delf no speed increase
  $("input#ch_speed").val("30 ft.");
  //Delf weapon prof
  $("input#ch_race_weapon_prof").val(["rapiers","shortswords","hand crossbows"]);
  //Adds features for elf and helf
  race_features = [];
  $(".feature_elf").each(function(  ) {
   race_features.push( $(this).text());
  });
  $(".feature_"+ race_selection ).each(function(  ) {
   race_features.push( $(this).text());
  });
  $("input#ch_race_features").val(race_features); 
}); 
  

//Halfling racial preloads
$("#panel_hal").click(function(event){
  resetStats();
  event.preventDefault();
  race_selection = "hal";
  
  bonus_dex = 2;
  $("input#ch_race_languages").val("Common & Halfling");
  $("input#ch_size").val("Small");
  $("input#ch_speed").val("25 ft.");
});
  
//Lightfood Halfling preloads
$("#halfling_desc").on("click","#panel_lhal", function(){
  resetStats();
  event.preventDefault();
  race_selection = "lhal";
  
  bonus_dex = 2;
  bonus_cha = 1;
 //Adds features for elf and helf
  race_features = [];
  $(".feature_hal").each(function(  ) {
   race_features.push( $(this).text());
  });
  $(".feature_"+ race_selection ).each(function(  ) {
   race_features.push( $(this).text());
  });
  $("input#ch_race_features").val(race_features); 
});
  
//Stout Halfling preloads
$("#halfling_desc").on("click","#panel_shal", function(){
  resetStats();
  event.preventDefault();
  race_selection = "shal";
  
  bonus_dex = 2;
  bonus_con = 1;
 //Adds features for elf and helf
  race_features = [];
  $(".feature_hal").each(function(  ) {
   race_features.push( $(this).text());
  });
  $(".feature_"+ race_selection ).each(function(  ) {
   race_features.push( $(this).text());
  });
  $("input#ch_race_features").val(race_features); 
  var alt_button = "button secondary race_click"
  
  alt_button = $( "#panel_shal" ).css( "class" );
});
  
  

//When a race option is selected - May be not necssary
$(".race_click").click(function(event){
  race_features = [];
  $(".feature_"+ race_selection ).each(function(  ) {
   race_features.push( $(this).text());
  });

  $("input#ch_race_features").val(race_features);
  $("input#ch_race").val($(this).html());
});

  
//Clickable tab links populate class field
$("a.class_click").click(function(event){
  event.preventDefault();
  $("input#ch_class").val($(this).html());
});

//Emulates 4d6 - dropping lowest
function randomScore() {
  var rolls = [];
  rolls.push(Math.round((Math.random()*5) + 1));
  rolls.push(Math.round((Math.random()*5) + 1));
  rolls.push(Math.round((Math.random()*5) + 1));
  rolls.push(Math.round((Math.random()*5) + 1));
  rolls.sort();
  rolls.splice(0, 1);
  
  //Adds sum of array values
  var rollsum = rolls.reduce(function(a, b) {
    return a + b;
  });
  return rollsum;
}

//Loops through all attributes and assigns randomly
for (i=0; i <= 6; i++) {
  $("#liran" + [i]).text(randomScore());
}

	// Hide stuff with the JavaScript. If JS is disabled, the form will still be usable.
	$(".name_wrap, #company_name_wrap, #special_accommodations_wrap").hide();
	
	// When a dropdown selection is made
	$("#attr_type").change(function() {

		$(".name_wrap").slideUp().find("input").removeClass("active_name_field");

        var numAttendees = $("#attr_type option:selected").text();
        
        if (numAttendees == "Standard Array") {
         $("#standard_array_wrap").slideDown();
          
          $( '.sortable' ).sortable({
            update: function () {
              var statArray = $(this).sortable('toArray');
              $("input#ch_stats").val(statArray);
              $("input#ch_str").val(statArray[0].slice(2,4));
              $("input#ch_dex").val(statArray[1].slice(2,4));
              $("input#ch_con").val(statArray[2].slice(2,4));
              $("input#ch_int").val(statArray[3].slice(2,4));
              $("input#ch_wis").val(statArray[4].slice(2,4));
              $("input#ch_cha").val(statArray[5].slice(2,4));
        }
    });
         
          
          
			$( ".sortable" ).disableSelection();
        }
		
        if (numAttendees == "Dice Roll") {
         $("#dice_roll_wrap").slideDown();
        	$( ".sortable" ).sortable();
			$( ".sortable" ).disableSelection();
        }
        
		if (numAttendees == "Point Buy") {
		  $("#point_buy_wrap").slideDown().find("input").addClass("active_name_field");
		}
	});
	
	
 
  

	//Point buy logic
  //PB Strength Plus
	$("#pb_str_plus").click(function(){
	  if ($("#pb_str").html() < 15 && $("#pb_total").html() > 0){
      $("#pb_str").html(function(i, val) { return val*1+1;});
      if ($("#pb_str").html() > 8) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
      if ($("#pb_str").html() > 13) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
	  }
	});
  //PB Strength Minus
	$("#pb_str_min").click(function(){
	  if ($("#pb_str").html() > 8){
      $("#pb_str").html(function(i, val) { return val*1-1;});
      $("#pb_total").html(function(i, val) { return val*1+1;});

      if ($("#pb_str").html() > 12) {
        $("#pb_total").html(function(i, val) { return val*1+1;});
      }
	  }
	});
  //PB Dex Plus
	$("#pb_dex_plus").click(function(){
	  if ($("#pb_dex").html() < 15 && $("#pb_total").html() > 0){
      $("#pb_dex").html(function(i, val) { return val*1+1;});
      if ($("#pb_dex").html() > 8) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
      if ($("#pb_dex").html() > 13) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
	  }
	});
  //PB Dex Minus
	$("#pb_dex_min").click(function(){
	  if ($("#pb_dex").html() > 8){
      $("#pb_dex").html(function(i, val) { return val*1-1;});
      $("#pb_total").html(function(i, val) { return val*1+1;});

      if ($("#pb_dex").html() > 12) {
        $("#pb_total").html(function(i, val) { return val*1+1;});
      }
	  }
	});
  
    //PB Int Plus
	$("#pb_int_plus").click(function(){
	  if ($("#pb_int").html() < 15 && $("#pb_total").html() > 0){
      $("#pb_int").html(function(i, val) { return val*1+1;});
      if ($("#pb_int").html() > 8) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
      if ($("#pb_int").html() > 13) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
	  }
	});
  //PB Int Minus
	$("#pb_int_min").click(function(){
	  if ($("#pb_int").html() > 8){
      $("#pb_int").html(function(i, val) { return val*1-1;});
      $("#pb_total").html(function(i, val) { return val*1+1;});

      if ($("#pb_int").html() > 12) {
        $("#pb_total").html(function(i, val) { return val*1+1;});
      }
	  }
	});  
  
    //PB Wis Plus
	$("#pb_wis_plus").click(function(){
	  if ($("#pb_wis").html() < 15 && $("#pb_total").html() > 0){
      $("#pb_wis").html(function(i, val) { return val*1+1;});
      if ($("#pb_wis").html() > 8) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
      if ($("#pb_wis").html() > 13) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
	  }
	});
  //PB Wis Minus
	$("#pb_wis_min").click(function(){
	  if ($("#pb_wis").html() > 8){
      $("#pb_wis").html(function(i, val) { return val*1-1;});
      $("#pb_total").html(function(i, val) { return val*1+1;});

      if ($("#pb_wis").html() > 12) {
        $("#pb_total").html(function(i, val) { return val*1+1;});
      }
	  }
	});  
  
    //PB Cha Plus
	$("#pb_cha_plus").click(function(){
	  if ($("#pb_cha").html() < 15 && $("#pb_total").html() > 0){
      $("#pb_cha").html(function(i, val) { return val*1+1;});
      if ($("#pb_cha").html() > 8) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
      if ($("#pb_cha").html() > 13) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
	  }
	});
  //PB cha Minus
	$("#pb_cha_min").click(function(){
	  if ($("#pb_cha").html() > 8){
      $("#pb_cha").html(function(i, val) { return val*1-1;});
      $("#pb_total").html(function(i, val) { return val*1+1;});

      if ($("#pb_cha").html() > 12) {
        $("#pb_total").html(function(i, val) { return val*1+1;});
      }
	  }
	});  
  
    //PB con Plus
	$("#pb_con_plus").click(function(){
	  if ($("#pb_con").html() < 15 && $("#pb_total").html() > 0){
      $("#pb_con").html(function(i, val) { return val*1+1;});
      if ($("#pb_con").html() > 8) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
      if ($("#pb_con").html() > 13) {
        $("#pb_total").html(function(i, val) { return val*1-1;});
      }
	  }
	});
  //PB con Minus
	$("#pb_con_min").click(function(){
	  if ($("#pb_con").html() > 8){
      $("#pb_con").html(function(i, val) { return val*1-1;});
      $("#pb_total").html(function(i, val) { return val*1+1;});

      if ($("#pb_con").html() > 12) {
        $("#pb_total").html(function(i, val) { return val*1+1;});
      }
	  }
	});  
  
  //Aligned info
  $('[data-slider]').on('change.fndtn.slider', function(){
  var current = $('#alignslider').attr('data-slider');
  var translation = "Neutral";
  
  if (current == 1){
    translation = "Lawful Good (LG)";
  }
  else if (current == 2){
    translation = "Neutral good (NG)";
  }
  else if (current == 3){
    translation = "Chaotic good (CG)";
  }
  else if (current == 4){
    translation = "Lawful Neutral (LN)";
  }
  else if (current == 5){
    translation = "Neutral (N)";
  }
  else if (current == 6){
    translation = "Chaotic Neutral (CN)";
  }
  else if (current == 7){
    translation = "Lawful Evil (LE)";
  }
  else if (current == 8){
    translation = "Neutral Evil (NE)";
  }
  else if (current == 9){
    translation = "Chaotic Evil (CE)";
  }

  $("input#ch_alignment").val(translation);

  });
  

  
});