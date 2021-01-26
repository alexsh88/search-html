const items = [
    { id: 53, image: "https://images.folloze.com/image/upload/v1450949154/folloze-image-gallery/campaign/heroimage01.png", title: "Space Mobile The Final Frontier" },
    { id: 2, image: "https://images.folloze.com/image/upload/v1450949153/folloze-image-gallery/campaign/heroimage13.png", title: "What if They Let You Run The Hubble Mobile" },
    { id: 3, image: "https://images.folloze.com/image/upload/v1450949153/folloze-image-gallery/campaign/heroimage04.png", title: "Shooting Stars Mobile" },
    { id: 4, image: "https://images.folloze.com/image/upload/v1450949149/folloze-image-gallery/campaign/heroimage11.png", title: "Make Money Online Through Advertising" },
    { id: 5, image: "https://images.folloze.com/image/upload/v1450949143/folloze-image-gallery/campaign/heroimage08.png", title: "What Makes Flyers Unrivaled" },
    { id: 6, image: "https://images.folloze.com/image/upload/v1450948643/folloze-image-gallery/campaign/heroimage05.png", title: "Adwords Keywork Research For Beginners" }
  ]

  const boards = [
    { id: 1, image: "https://images.folloze.com/image/upload/v1458832608/folloze-image-gallery/customer/customer_03.png", title: "The Baiscs Of Buying A Telescope Mobile" },
    { id: 2, image: "https://images.folloze.com/image/upload/v1450949395/folloze-image-gallery/customer/customer_02.png", title: "The Universe Through A Child Eyes Mobile" },
    { id: 3, image: "https://images.folloze.com/image/upload/v1450949032/folloze-image-gallery/customer/customer_04.png", title: "Home Business Advertising Ideas Mobile" },
    { id: 4, image: "https://images.folloze.com/image/upload/v1450949131/folloze-image-gallery/group/group_01.png", title: "Finally A Top Mobile Way You Can Google Adwords Pay Per Clicks" },
    { id: 5, image: "https://images.folloze.com/image/upload/v1450949052/folloze-image-gallery/group/group_02.png", title: "Study 800 Numbers Still Popula With Advertisers Mobile" },
    { id: 6, image: "https://images.folloze.com/image/upload/v1450948179/folloze-image-gallery/generic/generic_06.png", title: "Using Banner Stands To Increase Trade Show Traffic Mobile" }
  ]
  
  /* Your JavaScript */
 function searchFunction() {
    const itemResults = document.getElementById('itemResults');
    const boardResults = document.getElementById('boardResults');
    const itemCount = document.getElementById('itemCount');
    const boardCount = document.getElementById('boardCount');
    setFiltered(items, itemResults, itemCount, 'Item');
    setFiltered(boards, boardResults, boardCount, 'Board');
    
  }
 
  function setFiltered(list, results, count, type) {
    input = document.getElementById("myInput");
    const filterInput = input.value.toLowerCase();
    const filteredList = list.filter((item) => item.title.toLowerCase().includes(filterInput))
    const filteredCount = filteredList.reduce((acc, current) => {
      return acc +=1

    }, 0)
    count.innerHTML = `${type}s (${filteredCount})`;
    const filteredDisplayList = filteredList
    .map((item,i) => `<dl onClick="clickAlert('${item.id}','${type}')">
        <img src="${item.image}" class="image"/>
        <span class="content">${item.title}</span>
       </dl>`)
     .join('\n');
    results.innerHTML = `${filteredDisplayList}`;
  }

  function clickAlert(id, type) {
    console.log( `${type} ${id} was clicked`);
}
