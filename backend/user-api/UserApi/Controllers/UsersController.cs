using Microsoft.AspNetCore.Mvc;

namespace UserApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var users = new[]
        {
            new UserDto(1, "Alice Johnson", "alice.johnson@example.com", 28),
            new UserDto(2, "Bob Smith", "bob.smith@example.com", 34),
            new UserDto(3, "Charlie Davis", "charlie.davis@example.com", 22),
            new UserDto(4, "Diana Lee", "diana.lee@example.com", 30),
            new UserDto(5, "Ethan Brown", "ethan.brown@example.com", 41)
        };

        return Ok(users);
    }
}

public record UserDto(int Id, string Name, string Email, int Age);

