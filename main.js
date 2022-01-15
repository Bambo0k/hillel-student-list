const listStudents = [ 
    {
      img: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
      name: "Антон" ,
      subName: "Чебикін" ,
      homework: "7" ,
      points: "696"
    },
    {
      img: "https://lms.ithillel.ua/uploads/images/e6ef3cc070c3d4c97a46f984b94e3436.jpg" ,
      name: "Borys" ,
      subName: "Mukhatasov" ,
      homework: "7" ,
      points: "697"
    }
];

listStudents.forEach(function (element) {
    document.getElementById("reiting").insertAdjacentHTML(
      "beforeend", 
      `
      <tr>
        <td><img src="${element.img}" alt=""></td>
      <td>
          <div>${element.name}</div>
          <div>${element.subName}</div>
      </td>
      <td>
          <div>${element.homework}</div>
          <div>${element.points}</div>
      </td>
      </tr>
      `,
    );
  });