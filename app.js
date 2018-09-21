function distribute(nodes, workload){
    //your code here
    var initial =[];
    for (var i = 0; i < workload; i++) {
      initial.push(i);
      }
      
   
      var result = [];
      var integer = Math.trunc(workload/nodes);
      var remainder = workload % nodes;
      console.log('integer::', integer);
      console.log('remainder::', remainder);
     
     if(integer !==0){
      if(remainder === 0) {
        for (var i = 0; i < nodes; i++ ) {
            //result.push(initial.splice(0,integer))}
            
            var subarray = [];
            for (var j = 0; j < integer; j++) {
              subarray.push(initial.shift());
              console.log('subarray::', subarray);
              console.log('initial::', initial);
              }
             result.push(subarray);
            
             }
           }
       else {
           //var subarray = [];
           for(var i = 0; i < nodes; i++) {
               if(i < integer){
               result.push(initial.splice(0, integer+1))}
               else {
               result.push(initial.splice(0, integer))
               }
           }
       }
       }
       
       else {
         for(var i = 0; i < nodes; i++) {
           if(i < remainder){
             result.push(initial.splice(0,1))
           }
           else{
             result.push([])
           }
         }   
       }
        return result;
       }