import { useRouter } from "next/router";
import FormPromo from "@/components/FormPromo";

export default function DuplicatePromoCMS() {
    const router = useRouter();

    return (
        <div className="pt-5">
            <div className="flex w-full">
                <FormPromo pathSlug={router.query.slug} type={'duplicate'} />
            </div>
        </div>
    )
}