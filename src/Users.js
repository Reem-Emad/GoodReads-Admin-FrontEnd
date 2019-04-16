export default [
    {
      id: 1,
      FName: 'Malek',
      LName: 'Ahmed',
      email: 'malek@gmail.com',
      password: '1234',
      image:
        'https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830?k=6&m=589098830&s=612x612&w=0&h=Ut2FNWjS9CxXG5DdDduLqOEhcV0RBzRvsLrh9qS5EaY=',
      Admin: true,
      books:[{id:1,state:'Read'},{id:2,state:'Read'},{id:5,state:'Read'},{id:3,state:'Reading'},{id:6,state:'Want To Read'}],
      
    },
    {
        id: 2,
        FName: 'Reem',
        LName: 'Emad',
        email: 'reem@gmail.com',
        password: 'r12m',
        image: 'N/A',
          Admin: true,
          books:[{id:1,state:'Read'},{id:2,state:'Read'},{id:5,state:'Read'},{id:3,state:'Reading'},{id:6,state:'Want To Read'}],


    },
    {
        id: 3,
        FName: 'Dina',
       LName: 'Ashraf',
        email: 'dina@gmail.com',
        password: 'dina123',
        image: 'N/A',
      Admin: false,
       books:[{id:2,state:'Read'},{id:6,state:'Read'},{id:9,state:'Read'},{id:8,state:'Reading'},{id:1,state:'Want To Read'}],


    },
    {
        id: 4,
        FName: 'Yousry',
        LName: 'Mohamed',
        email: 'yousry@gmail.com',
        password: 'yousry123mohamed',
        image: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      Admin: false,
      books:[{id:1,state:'Read'},{id:3,state:'Reading'},{id:6,state:'Want To Read'}],

        
    },
    
  ];
