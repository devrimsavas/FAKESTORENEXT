import Image from "next/image";

const CompanyLogo=()=> {
    return (
        <Image
        src="/logo.png"
        alt="company logo"
        width={100}
        height={100}
        
        />
    )
}
export default CompanyLogo;