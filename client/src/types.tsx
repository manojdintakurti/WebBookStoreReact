export interface BookItem {
    bookId: number;
    title: string;
    author: string;
    price: number;
    isPublic: boolean;
    imgu: string;
}
export interface categoryListItem{
    categoryName:String;
    isSelected: boolean;
}
export const categoryList=[
    {
        categoryName:"Fiction",
        isSelected: false,
    },
    {
        categoryName:"Non Fiction",
        isSelected: true,
    },
    {
        categoryName:"Mystery Thriller",
        isSelected: false,
    },{
        categoryName:"Fantasy",
        isSelected: false,
    },
    {
        categoryName:"Romance",
        isSelected: false,
    },
    {
        categoryName:"Historical Fiction",
        isSelected: false,
    },
    {
        categoryName:"Children's Books",
        isSelected: false,
    },
    {
        categoryName:"Development",
        isSelected: false,
    },
    {
        categoryName:"Cookbooks",
        isSelected: false,
    },
    {
        categoryName:"Photography",
        isSelected: false,
    },
    {
        categoryName:"Spirituality",
        isSelected: false,
    },
    {
        categoryName:"More Categories",
        isSelected: false,
    }
];

export const booksList=[
    {
        bookId: 1001,
        title: "The Asset",
        author: "Joyce Meyer",
        price: 895,
        isPublic: true,
        imgu: "fiction.jpg",
    },
    {
        bookId: 1002,
        title: "Darkblade",
        author: "Andy Peloquin",
        price: 697,
        isPublic: false,
        imgu: "fantesy.jpg",
    },
    {
        bookId: 1003,
        title: "Close to home",
        author: "L.T. Ryan and K.M. Rought",
        price: 987,
        isPublic: true,
        imgu: "Mystery.jpg",
    },
    {
        bookId: 1004,
        title: "Discovering",
        author: "Caciope Fredy",
        price: 670,
        isPublic: true,
        imgu: "Social Science.gif",
    },
    {
        bookId: 1005,
        title: "Ordinary",
        author: "Start Z. Dia",
        price: 560,
        isPublic: false,
        imgu:"6.jpg",
    },
    {
        bookId: 1006,
        title: "The street",
        author: "Nicole Trope",
        price: 347,
        isPublic: false,
        imgu: "3.jpg",
    },
    {
        bookId: 1007,
        title: "Touch",
        author: "Rebbaca",
        price: 670,
        isPublic: false,
        imgu: "2.jpg",
    },
    {
        bookId: 1008,
        title: "The Void Beyond",
        author: "P.W Hillard",
        price: 546,
        isPublic: false,
        imgu: "66.jpg",
    },

]