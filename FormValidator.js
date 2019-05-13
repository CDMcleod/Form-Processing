function validate()
{
	if(document.forms[0].first_name.value == "" || document.forms[0].first_name.value == "First Name")
	{
		alert("Please enter a first name.");
	return false;
	}
	else if(document.forms[0].last_name.value == "" || document.forms[0].last_name.value == "First Name")
	{
		alert("Please enter a last name.");
	return false;
	}
	else if(document.forms[0].address1.value == "" || document.forms[0].address1.value == "Primary Address")
	{
		alert("Please enter a primary address.");
	return false;
	}
	else if(document.forms[0].city.value == "" || document.forms[0].city.value == "City")
	{
		alert("Please enter a valid city.");
	return false;
	}
	else if(document.forms[0].state.value == "" || document.forms[0].state.value == "State(e.g. SC)")
	{
		alert("Please enter a valid State.");
	return false;
	}
	else if(document.forms[0].zip_code.value == "" || document.forms[0].zip_code.value == "Zip Code")
	{
		alert("Please enter a Zip Code.");
	return false;
	}
	else if(document.forms[0].phone.value == "" || document.forms[0].phone.value == "Phone")
	{
		alert("Please enter a phone number.");
	return false;
	}
	else if(document.forms[0].card_type.checked != true)
	{
		alert("Please select a payment method.");
	return false;
	}
	else if(document.forms[0].card_number.value == "" || document.forms[0].card_number.value == "Card Number")
	{
		alert("Please enter a credit card number.");
	return false;
	}
	else if(document.forms[0].expiration_month.value == "Month" || document.forms[0].expiration_month.value == -1)
	{
		alert("Please enter a valid experation month.");
	return false;
	}
	else if(document.forms[0].expiration_year.value == "Year")
	{
		alert("Please enter a valid experation year.");
	return false;
	}
	else
		return true;
	
}