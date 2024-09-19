fetch("https://dummyjson.com/users?limit=3&select=id,firstName,lastName,email,image")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.users);
    posts(data.users);
  })
  .catch((err) => console.log(err));

const posts = (data) => {
  const container = document.querySelector("#contact__list__container");
  data.map((post) => {
    const postElement = document.createElement("div");
    const name = post.firstName + " " + post.lastName;
    const image = post.image.replace("128", "64");
    postElement.classList.add("content__item__container");
    postElement.innerHTML = `
        <img src="${image}" alt="${name}" />
        <div class="contact__detail__container">
          <p class="contact__detail-name">${name}</p>
          <p class="contact__detail-email">${post.email}</p>
        </div>
        <button class="content__item-button">x</button>
      `;
    container.appendChild(postElement);

    // Adding event listener for the button to remove the post element
    postElement
      .querySelector(".content__item-button")
      .addEventListener("click", () => {
        container.removeChild(postElement);
      });

    container.appendChild(postElement);
  });
};

document.querySelector("#main__container-button").addEventListener("click", () => {
    const nama = document.querySelector("#nama").value;
    const email = document.querySelector("#email").value;
    console.log([nama,email]);
    document.querySelector("#nama").value = "";
    document.querySelector("#email").value = "";
    const container = document.querySelector("#contact__list__container");
    const postElement = document.createElement("div");
    postElement.classList.add("content__item__container");
    postElement.innerHTML = `
        <div class="content__item-image">
            <img src="img/default.jpg" alt="${nama}" class="content__item__image-file" />
        </div>
        <div class="contact__detail__container">
          <p class="contact__detail-name">${nama}</p>
          <p class="contact__detail-email">${email}</p>
        </div>
        <button class="content__item-button">x</button>
      `;
    container.appendChild(postElement);

    // Adding event listener for the button to remove the post element
    postElement
      .querySelector(".content__item-button")
      .addEventListener("click", () => {
        container.removeChild(postElement);
      });

    container.appendChild(postElement);
});