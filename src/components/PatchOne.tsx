import React from "react";

const EventComponent = () => {
  return (
    <>
      <div className="min-h-screen rounded bg-black/40 m-7 flex justify-center items-center">
        {/* Contenedor central oscuro y semi-transparente */}
        <div className="max-w-4xl w-full p-6 bg-opacity-80 rounded-lg shadow-lg text-white">
          {/* Título */}
          <h1 className="text-4xl font-bold mb-8 text-center text-shadow ">
            Patch 1.0
          </h1>
          {/* Imagen principal del evento */}
          <div className="flex justify-center mb-6">
            <img
              src="/hadita.jpg"
              alt="Event Image"
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Contenido del evento */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Event</h2>
            <span className="block border-b-2 border-white-600 my-4 w-full"></span>{" "}
            {/* Línea separadora */}
            <p className="text-base leading-relaxed">
              Current Campfire event will end, and with that all event items
              such as Flint, Wood, and Campfire will be deleted.
            </p>
            <br />
            <br />
            A new event begins. A survivor from a recent raid on Gran Kain can
            be found in Rune Township. Speak to him to trade Monster Hearts into
            Gran Kain Chest.
            <br />
            <br />
            <p className="text-base leading-relaxed flex items-center">
              {/* Icono antes del texto */}
              <img src="/sirdis.png" alt="sirdis" className="w-9 h-9 mr-2" />
              Monster Heart is now dropping from monsters. Can be dropped every
              20 sec, daily account limit 1800.
            </p>
            <br />
            {/* Icono antes del texto */}
            <p className="text-base leading-relaxed flex items-center">
              {/* Icono antes del texto */}
              <img
                src="/chestgrankain.png"
                alt="chestgrankain"
                className="w-9 h-9 mr-2"
              />
              Gran Kain Chest can be acquired from Event NPC in Rune Township.
            </p>
          </section>

          {/* Tabla del Gran Kain Chest */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gran Kain Chest</h2>
            <span className="block border-b-2 border-white-600 my-4 w-full"></span>{" "}
            <div className="p-4 rounded-lg">
              <img
                src="/grankainchest.png"
                alt="grankainchest"
                className="w-5/6 h-auto object-cover rounded-md shadow-lg"
              />
            </div>
          </section>

          {/* Cambios de clase */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Class Change</h2>
            <span className="block border-b-2 border-white-600 my-4 w-full"></span>{" "}
            <p className="text-base leading-relaxed">
              We had no intention on introducing Class Change coupons any time
              soon. However, instead of people losing motivation and quitting,
              we are introducing class change much sooner than anticipated.
              <br />
              <br />
              <strong>After Class Change:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Your total character experience is reduced by 20%.</li>
                <li>
                  Certain classes only lose 10% experience: Shillien Elder,
                  Bishop, Elven Elder, etc.
                </li>
                <li>
                  Skills learned for spellbooks are refunded as Sealed
                  Spellbooks.
                </li>
                <li>
                  All enchanted skills are refunded as Skill Enchant Charging
                  Stones.
                </li>
                <li>Requires Class Change Coupon available from L2Store.</li>
              </ul>
            </p>
          </section>

          {/* Crafting especial */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Special Craft</h2>
            <span className="block border-b-2 border-white-600 my-4 w-full"></span>{" "}
            <p className="text-base leading-relaxed flex items-center">
              {/* Icono antes del texto */}
              <img src="/ignis.png" alt="ignis" className="w-9 h-9 mr-2" />A new
              item has been added to Special Craft for Giran Seals. Agathions
              can now be enchanted to +7.
            </p>
          </section>

          {/* Otros cambios */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Other Changes</h2>
            <p className="text-base leading-relaxed">
              Fixed Servitors having wrong stats at certain levels.
              <br />
              First Fortress Siege begins this Sunday (17/11/2024).
              <br />
              Olympiad begins next week (21/11/2024).
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default EventComponent;
