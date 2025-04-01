// [
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['dumbbell'] },
//     { user: 1, duration: 10, equipment: ['barbell'] },
//     { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//     { user: 7, duration: 200, equipment: ['bike'] },
//     { user: 2, duration: 200, equipment: ['treadmill'] },
//     { user: 2, duration: 200, equipment: ['bike'] },
//   ];
  
//   given above input, merge data with common userIds.
//   output should look like below
  
//    [
//      { user: 8, duration: 50, equipment: ['bench'] },
//      { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//      { user: 1, duration: 10, equipment: ['barbell'] },
//      { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
//    ]

function solve(input){
 for(a in input){
    consolelog(a);
 }
}
solve(
    [
        { user: 8, duration: 50, equipment: ['bench'] },
        { user: 7, duration: 150, equipment: ['dumbbell'] },
        { user: 1, duration: 10, equipment: ['barbell'] },
        { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
        { user: 7, duration: 200, equipment: ['bike'] },
        { user: 2, duration: 200, equipment: ['treadmill'] },
        { user: 2, duration: 200, equipment: ['bike'] },
    ]
      
)