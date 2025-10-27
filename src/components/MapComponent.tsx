

export default function MapComponent() {
  return (
    <section className="py-0 bg-gray-100">
        <div className="w-full h-96 border-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.482571753657!2d-103.36222252554397!3d20.731225880844665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b0213e60b82d%3A0x7b6de0d254daecac!2sUniversidad%20Pedag%C3%B3gica%20Nacional%2C%20Unidad%20145%20Zapopan!5e0!3m2!1ses-419!2smx!4v1760153213380!5m2!1ses-419!2smx" 
            width="100%" 
            height="100%" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </section>
  );
}