import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const SalesList = () => {
  const sales = [
    {
      id: 1,
      name: "John Smith",
      email: "john-smith@email.com",
      avatar: "https://ui.shadcn.com/avatars/01.png",
      revenue: "1,999.00",
    },
    {
      id: 2,
      name: "Jane Johnson",
      email: "jane-johnson@email.com",
      avatar: "https://ui.shadcn.com/avatars/02.png",
      revenue: "39.00",
    },
    {
      id: 3,
      name: "Jim Williams",
      email: "jim-williams@email.com",
      avatar: "https://ui.shadcn.com/avatars/03.png",
      revenue: "299.00",
    },
    {
      id: 4,
      name: "Jill Brown",
      email: "jill-brown@email.com",
      avatar: "https://ui.shadcn.com/avatars/04.png",
      revenue: "99.00",
    },
    {
      id: 5,
      name: "Joe Davis",
      email: "joe-davis@email.com",
      avatar: "https://ui.shadcn.com/avatars/05.png",
      revenue: "2,999.00",
    },
  ];

  return (
    <ul>
      {sales.map((sale) => {
        return (
          <li key={sale.id} className="flex gap-3 align-middle pt-5">
            <Avatar className="w-11">
              <AvatarImage src={sale.avatar} />
              <AvatarFallback>{sale.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="font-semibold">{sale.name}</p>
              <p className="text-sm text-muted-foreground">{sale.email}</p>
            </div>
            <p className="text-right font-semibold">+${sale.revenue}</p>
          </li>
        );
      })}
    </ul>
  );
};
