
const allBtn = document.getElementsByClassName("add-btn");

let count = 0;

for(const btns of allBtn){
    btns.addEventListener('click', function(e){
        count = count + 1;

        const placeName = e.target.parentNode.children[0].innerText
        
        const price = e.target.parentNode.children[1].children[0].innerText
        const convertedPrice = parseInt(price)
    //   console.log(typeof convertedPrice)
        
       const totalBudget = document.getElementById('total-budget').innerText
       const convertedTotalBudget = parseInt(totalBudget)

       if(convertedTotalBudget - convertedPrice < 0){
        alert('low budget, earn more')
        return
       }else{
        
       }

       document.getElementById('total-budget').innerText = convertedTotalBudget - convertedPrice;


        const selectedContainer = document.getElementById('selected-place-container')
    
        const li = document.createElement('li');
        const p = document.createElement('p')
        p.innerText = placeName
        const p2 = document.createElement('p')
        p2.innerText = convertedPrice

        li.appendChild(p)
        li.appendChild(p2)
        li.classList.add('flex', 'gap-4')
        selectedContainer.appendChild(li)


        // const totalCost = document.getElementById('total-cost').innerText;
        // const convertedTotalCost = parseInt(totalCost);
        // const sum2 = convertedTotalCost + convertedPrice

          const sum2 = updateTotalCost('total-cost', price)

        setInnerTetx('total-cost', sum2)
       


    //   document.getElementById("cart-count").innerText = count
    setInnerTetx("cart-count" , count)
      
        
    })

    
}






// common or utility functon

function setInnerTetx(id, value){
    document.getElementById(id).innerText = value ;
 
}



/*
 const totalCost = document.getElementById('total-cost').innerText;
 const convertedTotalCost = parseInt(totalCost);
 const sum2 = convertedTotalCost + convertedPrice
 */

// reusable function of this task
function  updateTotalCost(id, value){
    const toatalCostElementById = document.getElementById(id)
    const totalCostText = toatalCostElementById.innerText;
    const convertedTotalCost = parseInt(totalCostText);

    const convertedValue = parseInt(value);

    const sum = convertedTotalCost + convertedValue;
    toatalCostElementById.innerText = sum
    return sum;
    
}