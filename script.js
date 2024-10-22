
        // Get the modal
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const closeModal = document.getElementById("closeModal");

        // Get all images with class "clickable-image"
        const images = document.getElementsByClassName("clickable-image");

        // Add click event to each image
        for (let i = 0; i < images.length; i++) {
            images[i].onclick = function() {
                modal.style.display = "flex"; // Show modal
                modalImg.src = this.src; // Set modal image source
            }
        }

        // Close the modal when the user clicks on <span> (x)
        closeModal.onclick = function() {
            modal.style.display = "none"; // Hide modal
        }

        // Close the modal when clicking outside of the modal image
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none"; // Hide modal
            }
        }
   