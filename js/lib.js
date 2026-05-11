const productList = [
    { id: "01", name: "Yamaha R1 2021", price: 3500, image: "../assets/images/r1_2021.jpg", productLink: "product-detail.html", desc: "Siêu mô tô sportbike nổi tiếng với động cơ Crossplane 998cc mạnh mẽ. Thiết kế khí động học lấy cảm hứng trực tiếp từ đường đua MotoGP." },
    
    { id: "02", name: "Honda CBR1000RR-R Fireblade", price: 4200, image: "../assets/images/cbr_fireblade.jpg", productLink: "product-detail.html", desc: "Mẫu superbike hiệu suất cao của Honda với công nghệ tiên tiến và khả năng tăng tốc cực kỳ ấn tượng trên mọi cung đường." },
    
    { id: "03", name: "Kawasaki Ninja H2", price: 5000, image: "../assets/images/ninja_h2.jpg", productLink: "product-detail.html", desc: "Chiếc hypersport huyền thoại được trang bị siêu nạp (supercharged), mang đến sức mạnh bùng nổ cùng thiết kế cực ngầu." },
    
    { id: "04", name: "Ducati Panigale V4", price: 4800, image: "../assets/images/panigale_v4.jpg", productLink: "product-detail.html", desc: "Biểu tượng tốc độ của Ý với khối động cơ V4 Desmosedici mạnh mẽ. Thiết kế sang trọng và đậm chất đường đua." },
    
    { id: "05", name: "BMW S1000RR", price: 4600, image: "../assets/images/s1000rr.jpg", productLink: "product-detail.html", desc: "Mẫu superbike nổi bật với công nghệ điện tử hiện đại, khả năng vận hành ổn định và hiệu suất cực cao." },
    
    { id: "06", name: "Suzuki GSX-R1000", price: 3900, image: "../assets/images/Suzuki GSX-R10.jpg", productLink: "product-detail.html", desc: "Dòng sportbike huyền thoại của Suzuki với khả năng tăng tốc mạnh mẽ, bền bỉ và cực kỳ linh hoạt." },
    
    { id: "07", name: "KTM RC 390", price: 2200, image: "../assets/images/ktm_rc390.jpg", productLink: "product-detail.html", desc: "Mẫu sportbike tầm trung với thiết kế góc cạnh hiện đại, trọng lượng nhẹ và cảm giác lái cực kỳ thể thao." },
    
    { id: "08", name: "Aprilia RSV4 Factory", price: 5300, image: "../assets/images/rsv4_factory.jpg", productLink: "product-detail.html", desc: "Chiếc superbike đậm chất Ý với hiệu suất đua chuyên nghiệp, âm thanh uy lực và ngoại hình đầy cuốn hút." },
    
    { id: "09", name: "Harley-Davidson Fat Boy", price: 5500, image: "../assets/images/fatboy.jpg", productLink: "product-detail.html", desc: "Mẫu cruiser huyền thoại với thiết kế cơ bắp đặc trưng của Harley-Davidson. Mang phong cách mạnh mẽ, tự do và đầy chất Mỹ." },
    
    { id: "10", name: "Ducati Monster 937", price: 4700, image: "../assets/images/monster937.jpg", productLink: "product-detail.html", desc: "Chiếc naked bike nổi tiếng của Ducati với thiết kế tối giản nhưng đầy uy lực. Khả năng tăng tốc nhanh và cảm giác lái cực kỳ phấn khích." }
];


function loadProduct(products) 
{
    for(let i = 0; i < products.length; i++) 
    {
        addProduct_v2(products[i]);
    }
}


function addProduct_v2(product) 
{
    // Tạo khung ngoài cùng 
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col mb-4");
    productItem.style.flex = "0 0 20%";
    productItem.style.maxWidth = "20%";

    // Khung chứa ảnh
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image h-75 mb-2");

    // Thêm ảnh
    const myImage = document.createElement("img");
    myImage.setAttribute("src", product.image);
    myImage.setAttribute("alt", product.name);
    myImage.setAttribute("class", "img-thumbnail img-fluid h-100 object-fit-cover");

    myImage.style.height = "220px";
    myImage.style.width = "100%";
    myImage.style.objectFit = "cover";

    productImage.appendChild(myImage);

    // Khung thông tin
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center mt-2");

    // Tên moto
    const productName = document.createElement("p");
    productName.setAttribute("class", "fw-bold mb-1");

    productName.style.fontSize = "14px";
    productName.style.height = "40px";
    productName.style.overflow = "hidden";

    productName.innerText = product.name;
    productInfo.appendChild(productName);

    // Giá tiền
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "text-danger fw-bold mb-1");

    productPrice.innerText = product.price + ".000 VND";
    productInfo.appendChild(productPrice);

    // Nút xem chi tiết
    const productLink = document.createElement("a");
    productLink.setAttribute("href", product.productLink + "?id=" + product.id);
    productLink.setAttribute("class", "btn btn-dark btn-sm");

    productLink.innerText = "Xem chi tiết";
    productInfo.appendChild(productLink);

    // Gắn vào item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Xuất ra web
    document.getElementById("product-list").appendChild(productItem);
}

// Load sản phẩm khi mở trang
loadProduct(productList);
