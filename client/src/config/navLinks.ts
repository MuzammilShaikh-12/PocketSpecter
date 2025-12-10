export const navConfig: Record<string, {
   href: string;
   label: string;
}[]> = {
   // Default navigation links
   default:[
      {
         href:"/", label:"Home",
      },
   ],



   // Dashboard Links
   "/dashboard": [
    {
      href:"/documents", label:"Documents",
    },
    {
      href:"/cases", label:"Cases",
    },
    {
      href:"/help", label:"Help",
    },
  ],

   // Chat Links
   "/chat": [
      {
         href:"/dashboard", label:"Dashboard",
      },
   ]


}