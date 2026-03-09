using Microsoft.AspNetCore.Mvc;

namespace ProductApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProducts()
    {
        var products = new[]
        {
            new ProductDto(1, "Wireless Mouse", 19.99m, "Electronics"),
            new ProductDto(2, "Mechanical Keyboard", 79.50m, "Electronics"),
            new ProductDto(3, "Office Chair", 149.00m, "Furniture"),
            new ProductDto(4, "Water Bottle", 12.25m, "Accessories"),
            new ProductDto(5, "Notebook", 4.99m, "Stationery")
        };

        return Ok(products);
    }
}

public record ProductDto(int Id, string Name, decimal Price, string Category);

