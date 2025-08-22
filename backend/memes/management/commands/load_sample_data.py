from django.core.management.base import BaseCommand
from memes.models import Memes

class Command(BaseCommand):
    help = 'Load sample meme data'

    def handle(self, *args, **options):
        sample_memes = [
            {
                'title': 'Doge Meme',
                'url': 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg'
            },
            {
                'title': 'Grumpy Cat',
                'url': 'https://i.kym-cdn.com/entries/icons/original/000/011/365/grumpy_cat_cover.jpg'
            },
            {
                'title': 'Nyan Cat',
                'url': 'https://i.kym-cdn.com/entries/icons/original/000/000/184/nyan-cat-01.jpg'
            },
            {
                'title': 'Success Kid',
                'url': 'https://i.kym-cdn.com/entries/icons/original/000/000/142/success-kid.jpg'
            },
            {
                'title': 'Pepe',
                'url': 'https://i.kym-cdn.com/entries/icons/original/000/017/618/pepefroggie.jpg'
            }
        ]

        for meme_data in sample_memes:
            meme, created = Memes.objects.get_or_create(
                title=meme_data['title'],
                defaults={'url': meme_data['url']}
            )
            if created:
                self.stdout.write(
                    self.style.SUCCESS(f'Successfully created meme: {meme.title}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Meme already exists: {meme.title}')
                )

        self.stdout.write(
            self.style.SUCCESS('Sample data loading completed!')
        )
