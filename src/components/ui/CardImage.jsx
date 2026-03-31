import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function CardImage({
    badgetext,
    title,
    description,
    buttontext,
    image,
    className,
    imageClassName,
    imageLink,
    imageOnly = false,
    ...props
}) {
    const imageElement = (
        <img
            src={image || "https://picsum.photos/200/300"}
            alt={title || "Event cover"}
            className={cn(
                "block aspect-video w-full object-cover",
                imageClassName,
                imageOnly && "brightness-100 grayscale-0"
            )}
        />
    )

    return (
        <Card
            className={cn("relative mx-auto w-full max-w-sm overflow-hidden pt-0", imageOnly && "py-0", className)}
            {...props}
        >
        {imageLink ? (
            <a className="block" href={imageLink} target="_blank" rel="noreferrer" aria-label={title || "Open link"}>
                {imageElement}
            </a>
        ) : (
            imageElement
        )}
        {!imageOnly && (
            <>
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
            </>
        )}
        </Card>
    )
}

export default CardImage;
