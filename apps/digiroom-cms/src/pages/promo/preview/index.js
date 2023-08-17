import { BsImageAlt } from 'react-icons/bs';

export default function PromoPreview() {
    const htmlContent = '<p>This is <strong>HTML</strong> content.</p>';

    return (
        <div className='p-5'>
            {/* Hero Section */}
            <div className='w-full h-96 bg-slate-50 flex justify-center items-center'>
                <BsImageAlt size={100} color='#D3D2D2' />
            </div>

            <div className='flex justify-between pt-5'>
                <p className='text-lg font-bold'>TOYOTA ALPHARD 0% INTEREST PACKAGE</p>
                <p>Share</p>
            </div>

            {/* Periode Promosi */}
            <div className='pt-5'>
                <p className='text-base font-semibold'>Periode Promosi</p>

                <div className='flex text-sm gap-4 pt-1'>
                    <p>01 Jun 2023 - 31 Jul 2023</p>

                    <p className='px-2 rounded bg-yellow-300'>3 Hari Lagi!</p>
                </div>
            </div>

            {/* Detail Promosi */}
            <div className='pt-5'>
                <p className='text-base font-semibold'>Detail Promosi</p>

                <div className='pt-1' dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            <div className='pt-5'>
                <p className='text-base font-semibold'>Syarat dan Ketentuan</p>

                <p className='p-1 text-sm'>*Cicilan terlampir adalah untuk OTR DKI Jakarta dan untuk wilayah lain akan berbeda.</p>
            </div>
        </div>
    )
}