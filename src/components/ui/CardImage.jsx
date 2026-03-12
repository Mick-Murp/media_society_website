import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function CardImage({badgetext, title, description, buttontext, image}) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
            src={image || "https://picsum.photos/200/300"}
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
            <CardAction>
            <Badge variant="secondary">{badgetext}</Badge>
            </CardAction>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
            {description}
            </CardDescription>
        </CardHeader>
        <CardFooter>
            {buttontext && <Button className="w-full">{buttontext}</Button>}
        </CardFooter>
        </Card>
    )
}

export default CardImage;
