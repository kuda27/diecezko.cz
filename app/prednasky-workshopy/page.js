import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import { program } from "../../components/switcher/program";
import ContainerImage from "../../components/layouts/container-image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMapPin,
  IconWorld,
} from "@tabler/icons";
import ParmIcon from "../../components/layouts/parm-icon";
import Button from "../../components/layouts/button";
export default async function PrednaskyWorhsopy() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Přednášky a workshopy</ContainerTitle>
          <ProgramDetail p={program[3]} className={``} />
          <ContainerDescription>
            V první části odpoledne si můžete vybrat z&nbsp;bohaté nabídky
            přednášek, dvou workshopů nebo sportu.
          </ContainerDescription>
          <div className="flex flex-row items-center justify-center flex-wrap">
            <Link href={`#prednaska-start`}>
              <Button className={``}>
                <ParmIcon iconName={`person`} /> Přednášky
              </Button>
            </Link>
            <Link href={`#workshop-start`}>
              <Button>
                <ParmIcon iconName={`workshop`} /> Workshopy
              </Button>
            </Link>
            <Link href={`#sport-start`}>
              <Button>
                <ParmIcon iconName={`sport`} /> Sporty
              </Button>
            </Link>
          </div>
          <div>
            {workshops.map((w) => {
              return (
                <div
                  key={w.title}
                  id={w.id !== undefined ? w.id : ""}
                  className="flex flex-col items-center md:flex-row border-[#444] border rounded-xl p-6 sm:p-6 transition h-full hover:scale-[1.02] hover:rotate-1 mt-8"
                >
                  <ContainerImage
                    altText={`Fotka hosta ${w.speaker.name} k přednášce ${w.title}.`}
                    jpgPath={w.speaker.jpgPath}
                    webpPath={w.speaker.jpgPath.replace(".jpg", ".webp")}
                    className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8"
                  />
                  <div className="flex flex-col items-start justify-center w-full sm:w-[450px]">
                    <h2
                      dangerouslySetInnerHTML={{ __html: w.title }}
                      className="text-xl font-semibold w-full"
                    />
                    <span className="tracking-widest mt-1 font-light flex flex-row items-center justify-start">
                      <ParmIcon
                        iconName={w.type}
                        className={`inline`}
                        size={18}
                      />
                      {w.speaker.name}
                    </span>
                    {w.place !== undefined ? (
                      <span className="font-semibold flex flex-row items-center justify-start">
                        <IconMapPin
                          className="inline mr-1"
                          size={18}
                          stroke={1.5}
                        />
                        {w.place}
                      </span>
                    ) : null}
                    <p
                      className="text-lg w-full mt-2"
                      dangerouslySetInnerHTML={{ __html: w.descritpion }}
                    />
                    {w.social !== undefined ? (
                      <div className="mt-1 flex flex-row items-center justify-start">
                        <h3 className="uppercase mr-2">Sleduj na: </h3>
                        {w.social.web !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.web}
                            className="inline ml-1"
                            title={`Odkaz na web ${w.speaker.name}`}
                          >
                            <IconWorld stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.ig !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.ig}
                            className="inline ml-1"
                            title={`Odkaz na Instagram ${w.speaker.name}`}
                          >
                            <IconBrandInstagram stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.fb !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.fb}
                            className="inline ml-1"
                            title={`Odkaz na Facebook ${w.speaker.name}`}
                          >
                            <IconBrandFacebook stroke={1.5} />
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const workshops = [
  {
    title: "Kdo jsem a&nbsp;kam jdu? – aneb jaký je cíl mé cesty životem",
    type: "person",
    id: "prednaska-start",
    place: "BiGy",
    descritpion:
      "Vyprávění o&nbsp;motivaci pro putování do Compostelly, několik neobyčejných příběhů z&nbsp;cesty a&nbsp;v&nbsp;porovnání Svatojakubského putování s&nbsp;cestou životem.",
    speaker: {
      name: "Jan Votava",
      jpgPath: "/assets/images/speakers/votava.jpg",
    },
  },
  {
    title: "Cesta do hlubin mé duše",
    type: "person",
    place: "BiGy",
    descritpion:
      "Cestu do hlubin duše je možné učinit dvěma zdánlivě různými cestami - psychologickou a&nbsp;duchovní, které se nakonec vzájemně významně doplňují. Vyžaduje to určitou dávku odvahy. Poznám se, rozvinu se, nahlídnu i&nbsp;na stíny své osobnosti a&nbsp;v&nbsp;procesu psychoterapie mohu ošetřit svoje trápení, životní témata, která mě mohou v&nbsp;životě výrazně ovlivňovat.",
    speaker: {
      name: "Nikola Joštová",
      jpgPath: "/assets/images/speakers/jostova.jpg",
    },
    social: {
      web: "https://www.psychoterapie-jostova.cz/",
    },
  },
  {
    title: "",
    type: "person",
    place: "BiGy",
    descritpion: "",
    speaker: {
      name: "Terezie Hurychová",
      jpgPath: "/assets/images/speakers/hurychova.jpg",
    },
    social: {
      web: "https://www.lekari-bez-hranic.cz/article/terezie-hurychova-denik-z-kolumbie",
    },
  },
  {
    title: "Proč manželství?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Má manželství v&nbsp;dnešní době ještě smysl? Stojí pár fotek s&nbsp;družičkami za to? Nebo jen proto, že si to přejí rodiče nebo babička? Není důležitější se nejdřív pořádně vyzkoušet a&nbsp;hlavně mít se rádi?",
    speaker: {
      name: "manželé Anna a Karel Maříkovi",
      jpgPath: "/assets/images/speakers/marikovi.jpg",
    },
  },
  {
    title: "",
    type: "person",
    place: "BiGy",
    descritpion: "",
    speaker: {
      name: "sr. Anna Bartoňová a sr. Markéta Trešlová ",
      jpgPath: "",
    },
  },
  {
    title: "Jaké je to být dítětem ve válce?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Natálce je 9 let a&nbsp;Syrská občanská válka právě vypukla. Co se s&nbsp;Natálkou stane? Zachrání se Natálka s&nbsp;rodinou z&nbsp;válečného konfliktu? Pojď si poslechnout zajímavé informace o&nbsp;Sýrii a&nbsp;příběh Natálčiny rodiny, která našla mír v&nbsp;České republice.",
    speaker: {
      name: "Natalia Haddad",
      jpgPath: "/assets/images/speakers/haddad.jpg",
    },
  },
  {
    title: "Mladí a spoluodpovědnost za správu věcí veřejných",
    type: "person",
    place: "BiGy",
    descritpion: "",
    speaker: {
      name: "Marek Výborný",
      jpgPath: "/assets/images/speakers/vyborny.jpg",
    },
    social: {
      web: "https://www.kdu.cz/o-nas/nasi-lide/poslanci/vyborny",
      ig: "https://www.instagram.com/marek.vyborny/",
      fb: "https://www.facebook.com/vybornymarek",
    },
  },
  {
    title: "Svět indických dětí",
    type: "person",
    place: "BiGy",
    descritpion:
      "Zajímá Tě, jak žijí chudé indické děti a&nbsp;jaký význam pro ně má pomoc dárců z&nbsp;projektu Adopce na dálku? Během této besedy společně navštívíme jedno z&nbsp;nejlidnatějších měst Indie i&nbsp;místa na odlehlém venkově.",
    speaker: {
      name: "Vojtěch Homolka a Kateřina Gužíková",
      jpgPath: "",
    },
    social: {
      web: "https://adopce.hk.caritas.cz/",
      fb: "https://www.facebook.com/adopce.dchhk.cz",
    },
  },
  {
    title: "O čem byla synoda v Římě: Bude se měnit učení církve?",
    type: "person",
    place: "BiGy",
    descritpion:
      "Dva roky přípravy po celém světě, celý měsíc říjen plný setkání, diskuzí a&nbsp;modliteb v&nbsp;Římě. Přesně 365 účastníků s&nbsp;hlasovacím právem (včetně papeže Františka a&nbsp;54 žen). Co se řešilo a&nbsp;neřešilo na 16. řádném zasedání biskupské synody? Bude se žehnat homosexuálním párům? Budou se světit ženy na jáhenky? Zůstane katolická církev katolickou? Nebo je synoda o&nbsp;synodalitě trošku o&nbsp;něčem jiném?",
    speaker: {
      name: "Jan Pitřinec",
      jpgPath: "/assets/images/speakers/pitrinec.jpg",
    },
  },
  {
    title: "Nástrahy pornografie",
    type: "person",
    place: "Aula, BiGy",
    descritpion:
      "Ze statistik vyplývá, že pornografii v&nbsp;dnešní době sleduje téměř každý. A&nbsp;jelikož se o&nbsp;tom stále mluví poměrně málo, spousta lidí má pocit, že jsou v&nbsp;tom sami. Jakým způsobem nás sledování porna může ovlivňovat? Jak konkrétně vypadá taková závislost na pornografii? Jak s&nbsp;ní můžeme bojovat?",
    speaker: {
      name: "Táňa Reháková (NePornu)",
      jpgPath: "/assets/images/speakers/rehakova.jpg",
    },
    social: {
      web: "https://nepornu.cz/",
      fb: "https://www.facebook.com/nepornucz",
      ig: "https://www.instagram.com/info_npcz/",
    },
  },
  {
    title: "Povídání nejen o písničkách",
    type: "person",
    place: "BiGy",
    descritpion: "",
    speaker: {
      name: "Michal Horák",
      jpgPath: "/assets/images/speakers/horak.jpg",
    },
    social: {
      web: "https://www.michalhorak.eu/",
      fb: "https://www.facebook.com/doselcesnek",
      ig: "https://www.instagram.com/cichalsporak/",
    },
  },
  {
    title: "Kreativní workshop, dílny",
    type: "workshop",
    id: "workshop-start",
    place: "Katakomby, Nové Adalbertinum",
    descritpion: "",
    speaker: {
      name: "",
      jpgPath: "",
    },
  },
  {
    title: "Sportovní workshop",
    type: "sport",
    id: "sport-start",
    place: "Orlovna",
    descritpion: "",
    speaker: {
      name: "Honza Klinger",
      jpgPath: "/assets/images/speakers/klinger.jpg",
    },
  },
];
