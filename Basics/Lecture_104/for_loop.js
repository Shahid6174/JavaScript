// for

// for(let index = 0; index < 10; index++)
// {
//     if(index%2==0)
//         console.log("Even number" + index);
//     else  
//         console.log("Odd number" + index);
// }

// let array = ['TOC','EVS','AI','RMIPR','SEPM']
// for(let i = 0; i<array.length; i++)
// {
//     console.log("Subject " + (i+1), array[i]);
// }

// bubble sort

let arr = [3,2321,1,32,2,12,3,32,321]

console.log(arr);

for(let i = 0; i<arr.length; i++)
    {
        for(let j = i+1; j<arr.length; j++)
            {
                if(arr[i] > arr[j])
                    swap(arr,i,j)
            }
    }
        
    console.log(arr);
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}