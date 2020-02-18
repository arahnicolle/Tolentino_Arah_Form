function submitPassword()
{
        var pass = document.getElementById('pass').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        
        if (confirmPassword !== pass)
        {
                document.getElementById('confirmPassword').innerHTML = 'Passwords do not match';
        }
        else
        {
                document.getElementById('pass').innerHTML = 'Password Matched';
        }
}